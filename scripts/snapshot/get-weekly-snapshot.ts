import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getWeeklySnapshot = async (): Promise<void> => {
  throw new Error("not implemented yet");
};

getWeeklySnapshot();
