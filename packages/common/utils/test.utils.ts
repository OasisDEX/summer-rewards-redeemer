import {weeklyRewardData } from "./data";
import sinon from "sinon";
import { graphClient } from "./graph.utils";

export const graphStub = sinon.stub(graphClient, "WeeklyRewards");

export function setupGraphStub(weeklyRewards:any = weeklyRewardData) {
  graphStub.onCall(0).resolves(weeklyRewards);
 
}
