import { reverse } from "dns";
import { getBuiltGraphSDK } from "../../.graphclient";
import chalk from "chalk";
import { getEpochDayId } from "../common/utils/time.utils";
export async function fetchDailyData(dayId: number, url: string) {
  try {
    const sdk = getBuiltGraphSDK({
      url,
    });
    const res = await sdk.DailyRewards(
      { day: dayId.toString() },
      {
        url,
      }
    );
    return res;
  } catch (error) {
    throw new Error(`Error fetching daily data for day ${dayId}: ${error}. Graph client error.`);
  }
}
// https://api.thegraph.com/subgraphs/name/halaprix/gajna2

export async function verify(dayId: number, reverseOrder = false) {
  let earnMatched = 0;
  let earnMismatched = 0;
  let borrowMatched = 0;
  let borrowMismatched = 0;

  const url1 = "https://graph.staging.summer.fi/subgraphs/name/oasis/ajna";
  const url2 = "https://api.thegraph.com/subgraphs/name/halaprix/gajna4";
  const baseUrl = reverseOrder ? url1 : url2;
  const newUrl = reverseOrder ? url2 : url1;
  const baseData = await fetchDailyData(dayId, baseUrl);
  const newData = await fetchDailyData(dayId, newUrl);

  console.log(`Comparing day ${dayId}`);
  if (baseData.day?.id !== newData.day?.id) {
    console.log(`Mismatch for id: ${baseData.day?.id} !== ${newData.day?.id}`);
  } else {
    console.log(`Match for id: ${baseData.day?.id} === ${newData.day?.id}`);
  }
  const countBase = baseData.day?.borrowDailyRewards?.length! + baseData.day?.earnDailyRewards?.length!;
  const countNew = newData.day?.borrowDailyRewards?.length! + newData.day?.earnDailyRewards?.length!;
  if (countBase !== countNew) {
    console.log(chalk.red(`Mismatch for count: ${countBase} !== ${countNew}`));
  } else {
    console.log(chalk.green(`Match for count: ${countBase} === ${countNew}`));
  }
  console.log(
    chalk.dim(
      `Found ${
        baseData.day?.borrowDailyRewards?.length! + baseData.day?.earnDailyRewards?.length!
      } rewards in the base subgraph ${baseUrl}`
    )
  );
  console.log(
    chalk.dim(
      `Found ${
        newData.day?.borrowDailyRewards?.length! + newData.day?.earnDailyRewards?.length!
      } rewards in the new subgraph ${newUrl}`
    )
  );

  const newRewardBorrowIds = newData.day?.borrowDailyRewards?.map((r) => r.id);
  baseData.day?.borrowDailyRewards?.forEach((baseRewardData, index) => {
    const matchingNewRewardIndex = newRewardBorrowIds?.findIndex((id) => id === baseRewardData.id);

    if (matchingNewRewardIndex !== undefined && matchingNewRewardIndex !== -1) {
      const newRewardData = newData.day?.borrowDailyRewards?.[matchingNewRewardIndex];
      if (newRewardData) {
        if (newRewardData.reward !== baseRewardData.reward) {
          borrowMismatched++;
          console.log(
            `Mismatch for borrowDailyRewards[${index}]: ${newRewardData.reward} !== ${baseRewardData.reward}`
          );
        } else {
          borrowMatched++;
        }
      } else {
        borrowMismatched++;
        console.log(`inner Missing borrowDailyRewards[${index}] - reward id : ${baseRewardData.id}`);
      }
    } else {
      borrowMismatched++;
      console.log(`outer Missing borrowDailyRewards[${index}] - reward id : ${baseRewardData.id} `);
    }
  });

  const newRewardEarnIds = newData.day?.earnDailyRewards?.map((r) => r.id);
  baseData.day?.earnDailyRewards?.forEach((baseRewardData, index) => {
    const matchingNewRewardIndex = newRewardEarnIds?.findIndex(
      (id) => id.toLowerCase() === baseRewardData.id.toLowerCase()
    );

    if (matchingNewRewardIndex !== undefined && matchingNewRewardIndex !== -1) {
      const newRewardData = newData.day?.earnDailyRewards?.[matchingNewRewardIndex];
      if (newRewardData) {
        if (newRewardData.reward !== baseRewardData.reward) {
          console.log(`Mismatch for earnDailyRewards[${index}]: ${newRewardData.reward} !== ${baseRewardData.reward}`);
          earnMismatched++;
        } else {
          earnMatched++;
        }
      } else {
        earnMismatched++;
        console.log(`inner Missing earnDailyRewards[${index} - reward id : ${baseRewardData.id}]`);
      }
    } else {
      earnMismatched++;
      console.log(`outer Missing earnDailyRewards[${index}] - reward id : ${baseRewardData.id} `);
    }
  });
  console.log(chalk.green(`Found ${borrowMatched} matched borrow rewards`));
  if (borrowMismatched) {
    console.log(chalk.red(`Found ${borrowMismatched} mismatched borrow rewards`));
  }
  console.log(chalk.green(`Found ${earnMatched} matched earn rewards`));
  if (earnMismatched) {
    console.log(chalk.red(`Found ${earnMismatched} mismatched earn rewards`));
  }
  if (borrowMismatched === 0 && earnMismatched === 0) {
    console.log(chalk.green(`All rewards matched for day ${dayId}`));
  } else {
    console.log(chalk.red(`Rewards mismatch for day ${dayId}`));
  }
}

// // generate an array of N random integers beteen x and y
// function randomIntegers(x: number, y: number, N: number) {
//   const result = [];
//   for (let i = 0; i < N; i++) {
//     result.push(Math.floor(Math.random() * (y - x + 1) + x));
//   }
//   return result;
// }
// // generate an array of N random integers beteen x and y and check for duplicates
// function randomIntegersNoDuplicates(x: number, y: number, N: number) {
//   const result: number[] = [];
//   let i = 0;
//   while (i < N) {
//     const r = Math.floor(Math.random() * (y - x + 1) + x);
//     if (!result.includes(r)) {
//       result.push(r);
//       i++;
//     }
//   }
//   return result;
// }

const today = getEpochDayId();
async function main() {
  const firstDayOfRewards = 19544;
  const previousDay = today - 1;
  const amountOfDays = previousDay - firstDayOfRewards;
  const days = Array.from({ length: amountOfDays }, (_, i) => today - 1 - i);
  for (const day of days) {
    await verify(day);
  }
}
main();
