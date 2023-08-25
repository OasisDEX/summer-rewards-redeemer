import {weeklyRewardData } from "../../snapshot/test-data/data";
import sinon from "sinon";
import { graphClient } from "./graph.utils";

export const graphStub = sinon.stub(graphClient, "WeeklyRewards");

export function setupGraphStub() {
  graphStub.onCall(0).resolves(weeklyRewardData);
 
}
