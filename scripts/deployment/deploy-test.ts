import { ethers } from "hardhat";

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_DEPLOY!);

async function main() {
  const MerkleRedeemer = await ethers.getContractFactory("MerkleRedeemer");
  const OopsieDAI = await ethers.getContractFactory("OopsieDAI");
  const oopsieDAI = await OopsieDAI.deploy();
  // deployer is the operator, admin, urgent and beneficiary
  const merkleRedeemer = await MerkleRedeemer.deploy(oopsieDAI.address, wallet.address, wallet.address);
  await merkleRedeemer.deployed();
  await oopsieDAI.deployed();
  console.log(oopsieDAI.address);
  console.log(merkleRedeemer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
