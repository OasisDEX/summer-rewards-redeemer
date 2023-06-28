import { impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber, constants, Contract } from "ethers";
import { ethers, network } from "hardhat";
import MerkleTree from "merkletreejs";

import { addresses, config } from "./config";
import { Snapshot } from "./types";

/**
 * Deploys a contract with the specified name and arguments.
 *
 * @template T - A type representing the ABI of the contract to deploy.
 * @param {string} contractName - The name of the contract to deploy.
 * @param {any[]} args - An array of arguments to pass to the contract constructor.
 *
 * @returns {Promise<T>} - A `Promise` that resolves when the contract is deployed and initialized, returning an instance of the deployed contract.
 */
export const deployContract = async <T extends Contract>(contractName: string, args: any[]): Promise<T> => {
  const factory = await ethers.getContractFactory(contractName);
  const contract = (await factory.deploy(...args)) as T;
  await contract.deployed();
  return contract;
};
/**
 * Gets an instance of a deployed contract, given its name and address.
 *
 * @template T - A type representing the ABI of the contract to get.
 * @param {string} contractName - The name of the contract to get.
 * @param {string} contractAddress - The address of the deployed contract to get.
 *
 * @returns {Promise<T>} - A Promise that resolves to an instance of the deployed contract.
 */
export const getContract = async <T extends Contract>(contractName: string, contractAddress: string): Promise<T> => {
  const contract = (await ethers.getContractAt(contractName, contractAddress)) as T;
  return contract;
};
/**
 * Gets a deployed contract instance or deploys a new one if it does not exist yet.
 *
 * @template T - A type representing the ABI of the contract to deploy/get.
 * @param {string} contractName - The name of the contract to deploy/get.
 * @param {any[]} args - An array of arguments to pass to the constructor of the contract, in order.
 *
 * @returns {Promise<T>} - A Promise that resolves to an instance of the deployed contract.
 */
export const getOrDeployContract = async <T extends Contract>(contractName: string, args: any[]): Promise<T> => {
  let contract: T;
  if (config.addresses[getCorrectName(contractName)] === ethers.constants.AddressZero) {
    contract = await deployContract(contractName, args);
  } else {
    console.info(`${contractName} already deployed`);
    contract = await getContract(contractName, config.addresses[getCorrectName(contractName)]);
  }
  return contract;
};

/**
 * Creates a Merkle tree from a snapshot of Ethereum addresses and amounts.
 *
 * @param {Snapshot} snapshot - The snapshot of accounts to use in creating the tree.
 *
 * @returns {{ leaves: string[]; tree: MerkleTree; root: string }} - An object containing the leaves of the tree,
 * the tree itself, and its root hash.
 */
export const createMerkleTree = (snapshot: Snapshot): { leaves: string[]; tree: MerkleTree; root: string } => {
  const leaves = snapshot.map((user) =>
    ethers.utils.solidityKeccak256(["address", "uint256"], [user.address, user.amount])
  );
  const tree = new MerkleTree(leaves, ethers.utils.keccak256, config.merkleTreeOptions);
  const root = tree.getHexRoot();
  return { leaves, tree, root };
};

/**
 * Impersonates the specified address and returns a signer object with it.
 * @param {string} address - The address to impersonate.
 * @returns {Promise<SignerWithAddress>} - A SignerWithAddress object representing the
 * impersonated account.
 * @throws If there is an error in impersonating the account or setting its balance.
 */
export const impersonate = async (address: string): Promise<SignerWithAddress> => {
  await impersonateAccount(address);
  const signer = await ethers.getSigner(address);
  setBalance(address, ethers.utils.parseEther("10000"));
  return signer;
};

/**
 * Find the index of the storage slot in an ERC20 token contract where balance information
 * is stored.
 * @param {string} tokenAddress - The address of the ERC20 token contract to search.
 * @returns {Promise<number>} - The index of the balances storage slot found by probing
 * different slots and comparing the resulting balances.
 * @throws If a balances slot could not be found after 100 attempts.
 */
export const findBalancesSlot = async (tokenAddress: string): Promise<number> => {
  const encode = (types: any[], values: any[]) => ethers.utils.defaultAbiCoder.encode(types, values);
  const account = constants.AddressZero;
  const probeA = encode(["uint"], [BigNumber.from("100")]);
  const probeB = encode(["uint"], [BigNumber.from("200")]);
  const token = await ethers.getContractAt("ERC20", tokenAddress);
  for (let i = 0; i < 100; i++) {
    let probedSlot = ethers.utils.keccak256(encode(["address", "uint"], [account, i]));
    // remove padding for JSON RPC
    while (probedSlot.startsWith("0x0")) probedSlot = "0x" + probedSlot.slice(3);
    const prev = await network.provider.send("eth_getStorageAt", [tokenAddress, probedSlot, "latest"]);
    // make sure the probe will change the slot value
    const probe = prev === probeA ? probeB : probeA;

    await network.provider.send("hardhat_setStorageAt", [tokenAddress, probedSlot, probe]);

    const balance = await token.balanceOf(account);
    // reset to previous value
    await network.provider.send("hardhat_setStorageAt", [tokenAddress, probedSlot, prev]);
    if (balance.eq(ethers.BigNumber.from(probe))) return i;
  }
  throw new Error("Balances slot not found!");
};
/**
 * Set token balance to the provided value.
 * @param {string} account  - address of the wallet holding the tokens
 * @param {string}tokenAddress - address of the token contract
 * @param {BigNumber} balance - token balance to set
 * @return {Promise<boolean>} if the operation succedded
 */
export const setTokenBalance = async (account: string, tokenAddress: string, balance: BigNumber): Promise<boolean> => {
  const slot = await findBalancesSlot(tokenAddress);
  let index = ethers.utils.solidityKeccak256(["uint256", "uint256"], [account, slot]);
  if (index.startsWith("0x0")) index = "0x" + index.slice(3);

  await ethers.provider.send("hardhat_setStorageAt", [
    tokenAddress,
    index,
    ethers.utils.hexZeroPad(balance.toHexString(), 32),
  ]);
  const token = await ethers.getContractAt("ERC20", tokenAddress);
  const balanceAfter = await token.balanceOf(account);
  return balance === balanceAfter;
};

/**
 * Convert the first character of a string to lower case, preserving the case
 * of the remaining characters.
 * @param {string} name - The input string to modify.
 * @returns {string} A new string with the first character of `name` in lowercase, and
 * the rest of the original case.
 */
const getCorrectName = (name: string) => {
  return name.charAt(0).toLowerCase().concat(name.slice(1));
};

/**
 * Get the number of days that have elapsed since the Unix epoch.
 * @returns {number} The number of days since January 1, 1970.
 */
export const getEpochDayId = (): number => {
  const oneDayMilliseconds = 24 * 60 * 60 * 1000;
  const today = new Date();
  const epoch = new Date(1970, 0, 1);
  return Math.floor((today.getTime() - epoch.getTime()) / oneDayMilliseconds);
};
/**
 * Get the number of weeks that have elapsed since the first week of the Unix epoch.
 * @returns {number} The number of weeks since the first week of January 1970.
 */
export const getEpochWeekId = (): number => {
  const oneWeekMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const today = new Date();
  const epoch = new Date(1970, 0, 4);
  return Math.floor((today.getTime() - epoch.getTime()) / oneWeekMilliseconds);
};
