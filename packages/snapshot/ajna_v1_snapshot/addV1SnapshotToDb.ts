import { createReadStream } from "node:fs";

import { parse } from "csv-parse";
import { AjnaRewardsSource, prisma } from "database";

async function main() {
  const parser = parse({
    delimiter: ",",
    columns: true,
  });

  const records: {
    user_address: string;
    amount: string;
    chain_id: number;
    source: AjnaRewardsSource;
    week_number: number;
    proof: string[];
  }[] = [];

  parser.on("readable", function () {
    let record;
    while ((record = parser.read())) {
      records.push({
        user_address: record.user_address,
        amount: record.amount,
        chain_id: 1,
        source: AjnaRewardsSource.bonus,
        week_number: 0,
        proof: [],
      });
    }
  });

  parser.on("end", async function () {
    await prisma.ajnaRewardsWeeklyClaim.createMany({
      data: records,
      skipDuplicates: true,
    });
  });

  createReadStream("./ajna_v1_snapshot/ajna_rewards_daily_claim_202311220954.csv").pipe(parser);
}

main().catch((e) => {
  console.error(e);
  throw new Error(e);
});
