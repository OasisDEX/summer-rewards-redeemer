import { ethers } from "ethers";
import MerkleTree from "merkletreejs";

import { config } from "../config";
import { Snapshot } from "../types";

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
