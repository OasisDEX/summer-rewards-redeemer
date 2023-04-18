import { impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import MerkleTree from "merkletreejs";

export const deployContract = async <T extends Contract>(contractName: string, args: any[]): Promise<T> => {
  const factory = await ethers.getContractFactory(contractName);
  const contract = (await factory.deploy(...args)) as T;
  await contract.deployed();
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
