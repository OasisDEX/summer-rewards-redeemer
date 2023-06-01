import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { HUNDRED_THOUSAND, MILLION } from "./constants";

export const BASE_WEEKLY_AMOUNT = MILLION.add(HUNDRED_THOUSAND)

export const dummyProcessedSnaphot: { address: string; amount: BigNumber }[] = [
  { address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955", amount: BASE_WEEKLY_AMOUNT.mul(2).div(10) },
  { address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", amount: BASE_WEEKLY_AMOUNT.mul(3).div(10) },
  { address: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", amount: BASE_WEEKLY_AMOUNT.mul(1).div(10) },
  { address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906", amount: BASE_WEEKLY_AMOUNT.mul(1).div(10) },
  { address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", amount: BASE_WEEKLY_AMOUNT.mul(1).div(10) },
  { address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc", amount: BASE_WEEKLY_AMOUNT.mul(2).div(100) },
  { address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9", amount: BASE_WEEKLY_AMOUNT.mul(18).div(100) },
];
