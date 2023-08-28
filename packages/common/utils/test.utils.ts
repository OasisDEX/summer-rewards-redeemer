import { weeklyRewardData } from "./data";
import sinon from "sinon";
import { graphClient } from "./graph.utils";
export let graphStub: any;

export function setupGraphStub(rewards: any, queryType: "daily" | "weekly" | "weeklyPartner" | "dailyPartner") {
  if (queryType == "daily") {
    graphStub = sinon.stub(graphClient, "DailyRewards");
    graphStub.onCall(0).resolves(rewards);
    return graphStub;
  } else if (queryType == "weekly") {
    graphStub = sinon.stub(graphClient, "WeeklyRewards");
    graphStub.onCall(0).resolves(rewards);
    return graphStub;
  } else if (queryType == "weeklyPartner") {
    graphStub = sinon.stub(graphClient, "WeeklyPartnerRewards");
    graphStub.onCall(0).resolves(rewards);
    return graphStub;
  }else if (queryType == "dailyPartner") {
    graphStub = sinon.stub(graphClient, "DailyPartnerRewards");
    graphStub.onCall(0).resolves(rewards);
    return graphStub;
  }
}
