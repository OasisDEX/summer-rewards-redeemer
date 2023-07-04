import { createHash } from "crypto";
import fs from "fs";

import { calculateWeeklySnapshot } from "./get-snapshot";

describe("First", () => {
  const dataDir = "./scripts/snapshot/test-data/weekly";
  let files: any[] = [];
  let data: any[] = [];
  let snapshots: any[] = [];
  let weekIds: number[] = [];
  beforeAll(async () => {
    files = fs.readdirSync(dataDir).filter((file: any) => /^weekly-data-\d+.json$/.test(file));
    weekIds = files.map((file: any) => parseInt(file.match(/\d+/)[0]));
    data = files.map((file: any) => JSON.parse(fs.readFileSync(`${dataDir}/${file}`, "utf8")));
    snapshots = files.map((file: any, index) =>
      fs.readFileSync(`${dataDir}/weekly-snapshot-${weekIds[index]}.json`, "utf8")
    );
  });

  test("should verify the save snapshot against calcualtion execution", () => {
    for (let i = 0; i < files.length; i++) {
      const result = calculateWeeklySnapshot(data[i], weekIds[i]);
      const fileContents = snapshots[i];
      if (!fileContents) {
        throw new Error(`No weekly snapshot found for week ${weekIds[i]}`);
      }
      const x = createHash("sha1").update(JSON.stringify(result)).digest("base64");
      const y = createHash("sha1").update(fileContents).digest("base64");
      expect(x).toEqual(y);
    }
  });

  jest.setTimeout(100000); // 100 seconds
});
