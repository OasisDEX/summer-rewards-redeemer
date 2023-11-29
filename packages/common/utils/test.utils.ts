import sinon from "sinon";
import { graphClient } from "./graph.utils";
export let graphStub: any;

export function setupGraphStub(queryType: "daily" | "weekly" | "weeklyPartner" | "dailyPartner", rewards: any[]) {
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
  graphStub.onCall(0).resolves(rewards[0]);
  graphStub.onCall(1).resolves(rewards[1]);
  return graphStub;
}
