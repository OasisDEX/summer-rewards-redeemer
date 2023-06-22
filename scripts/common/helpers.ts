import { impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber, Contract, constants } from "ethers";
import { ethers, network } from "hardhat";
import MerkleTree from "merkletreejs";

export const deployContract = async <T extends Contract>(contractName: string, args: any[]): Promise<T> => {
  const factory = await ethers.getContractFactory(contractName);
  const contract = (await factory.deploy(...args)) as T;
  await contract.deployed();
  return contract;
};
export const getContract = async <T extends Contract>(contractName: string, contractAddress: string): Promise<T> => {
  const contract = (await ethers.getContractAt(contractName, contractAddress)) as T;
  return contract;
};
export const createMerkleTree = (
  snapshot: {
    address: string;
    amount: BigNumber;
  }[]
) => {
  const leaves = snapshot.map((user) =>
    ethers.utils.solidityKeccak256(["address", "uint256"], [user.address, user.amount])
  );
  const tree = new MerkleTree(leaves, ethers.utils.keccak256, {
    sortLeaves: false,
    sortPairs: true,
  });
  const root = tree.getHexRoot();
  return { leaves, tree, root };
};

export const impersonate = async (address: string): Promise<SignerWithAddress> => {
  await impersonateAccount(address);
  const signer = await ethers.getSigner(address);
  setBalance(address, ethers.utils.parseEther("10000"));
  return signer;
};

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
  throw "Balances slot not found!";
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
  return balance == balanceAfter;
};
