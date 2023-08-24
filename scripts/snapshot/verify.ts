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
const url1 = "https://graph.summer.fi/subgraphs/name/oasis/ajna";
const url2 = "https://api.thegraph.com/subgraphs/id/QmdRRdygRQNW5eBbvcrTK74sPybj6ARVRBA6cDc7tECXaF";

export async function verify(dayId: number, reverseOrder = false) {
  let earnMatched = 0;
  let earnMismatched = 0;
  let borrowMatched = 0;
  let borrowMismatched = 0;

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
          const percentage = getPercentDifference(baseRewardData.reward, newRewardData.reward);
          if (percentage > 5) {
            console.log(chalk.red(`mismatch for borrow reward (diff ${percentage} %): id: ${baseRewardData.id} `));
          } else {
            console.log(chalk.green(`match for borrow reward    (diff ${percentage} %): id: ${baseRewardData.id} `));
          }
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
          const percentage = getPercentDifference(baseRewardData.reward, newRewardData.reward);
          if (percentage > 5) {
            console.log(chalk.red(`mismatch for earn reward (diff ${percentage} %): id: ${baseRewardData.id} `));
          } else {
            console.log(chalk.green(`match for earn reward    (diff ${percentage} %): id: ${baseRewardData.id} `));
          }
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
  if (borrowMismatched === 0 && earnMismatched === 0 && countNew === countBase) {
    console.log(chalk.green(`All rewards matched for day ${dayId}`));
  } else {
    console.log(chalk.red(`Rewards mismatch for day ${dayId}`));
  }
}

const today = getEpochDayId();
function getPercentDifference(baseRewardString: string, newRewardString: string) {
  const baseReward = parseFloat(baseRewardString);
  const newReward = parseFloat(newRewardString);
  const difference = Math.abs(baseReward - newReward);
  const percentage = Math.round((difference / baseReward) * 100 * 100) / 100;
  return percentage;
}

async function main() {
  const firstDayOfRewards = 19544;
  const previousDay = today - 1;
  const amountOfDays = previousDay - firstDayOfRewards;
  const days = [19592];
  for (const day of days) {
    await verify(day);
  }
}
main();
