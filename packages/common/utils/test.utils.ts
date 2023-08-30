import { weeklyRewardData } from "./data";
import sinon from "sinon";
import { graphClient } from "./graph.utils";
export let graphStub: any;

export function setupGraphStub(rewards: any, queryType: "daily" | "weekly" | "weeklyPartner" | "dailyPartner") {
  switch (queryType) {
    case "daily":
      graphStub = sinon.stub(graphClient, "DailyRewards");
      break;
    case "weekly":
      graphStub = sinon.stub(graphClient, "WeeklyRewards");
      break;
    case "weeklyPartner":
      graphStub = sinon.stub(graphClient, "WeeklyPartnerRewards");
      break;
    case "dailyPartner":
      graphStub = sinon.stub(graphClient, "DailyPartnerRewards");
      break;
    default:
      throw new Error(`Invalid query type: ${queryType}`);
  }
  graphStub.onCall(0).resolves(rewards);
  return graphStub;
}
