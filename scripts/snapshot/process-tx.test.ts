import { expect } from "chai";
import { ethers } from "hardhat";

import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../../typechain-types";
import { config } from "../common/config";
import { getContract, getOrDeployContract, setTokenBalance } from "../common/helpers";
import { BASE_WEEKLY_AMOUNT } from "../common/test-data";
import { processTransaction } from "./process-tx";

describe("processTransaction", function () {
  let ajnaToken: AjnaToken;
  let ajnaDripper: AjnaDripper;
  let ajnaRedeemer: AjnaRedeemer;

  beforeEach(async function () {
    ajnaToken = await getContract<AjnaToken>("AjnaToken", config.addresses.ajnaToken);
    ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
      config.addresses.ajnaToken,
      config.addresses.admin,
    ]);
    ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
      config.addresses.ajnaToken,
      config.addresses.operator,
      ajnaDripper.address,
    ]);
  });

  it("should add a root to AjnaRedeemer contract", async function () {
    const weekId = 1;
    const root = ethers.utils.keccak256("test root");
    await processTransaction(weekId, root);

    const addedRoot = await ajnaRedeemer.weeklyRoots(weekId);
    expect(addedRoot).to.equal(root);
  });

  it("should set the token balance of AjnaDripper contract", async function () {
    const weekId = 1;
    const root = ethers.utils.keccak256("test root");
    await processTransaction(weekId, root);

    const balance = await ajnaToken.balanceOf(ajnaDripper.address);
    expect(balance).to.equal(BASE_WEEKLY_AMOUNT);
  });

  it("should change the redeemer of AjnaDripper contract", async function () {
    const weekId = 1;
    const root = ethers.utils.keccak256("test root");
    await processTransaction(weekId, root);

    const newRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
      config.addresses.ajnaToken,
      config.addresses.operator,
      ajnaDripper.address,
    ]);
    await setTokenBalance(newRedeemer.address, ajnaToken.address, BASE_WEEKLY_AMOUNT);

    await ajnaDripper.changeRedeemer(newRedeemer.address, BASE_WEEKLY_AMOUNT);
    const currentRedeemer = await ajnaDripper.redeemer();
    expect(currentRedeemer).to.equal(newRedeemer.address);
  });
});
