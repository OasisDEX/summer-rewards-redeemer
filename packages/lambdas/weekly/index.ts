import { processWeeklyClaims } from "ajna-rewards-snapshot/process-weekly";

type EventWeekList = {
  weekIds?: number[];
};
export const handler = async (event: any) => {
  const eventData = event.body as EventWeekList;

  try {
    await processWeeklyClaims(eventData.weekIds);
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
