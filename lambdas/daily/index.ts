import { processAllNetworksDailyClaims } from "../../scripts/snapshot/process-daily";

type EventDayList = {
  dayIds?: number[];
};
export const handler = async (event: any) => {
  const eventData = event.body as EventDayList;

  try {
    await processAllNetworksDailyClaims(eventData.dayIds);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Success",
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error",
      }),
    };
  }
};
