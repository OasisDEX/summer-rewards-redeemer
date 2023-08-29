import { weeklyRewardData } from "./data";
import sinon from "sinon";
import { graphClient } from "./graph.utils";
export let graphStub: any;

export function setupGraphStub(rewards: any, queryType: "daily" | "weekly") {
  if (queryType == "daily") {
    graphStub = sinon.stub(graphClient, "DailyRewards");
    graphStub.onCall(0).resolves(rewards);
    return graphStub;
  } else if (queryType == "weekly") {
    graphStub = sinon.stub(graphClient, "WeeklyRewards");
    graphStub.onCall(0).resolves(rewards);
    return graphStub;
  }
}
