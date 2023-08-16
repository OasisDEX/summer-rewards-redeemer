/**
 * Get the number of days that have elapsed since the Unix epoch.
 * @returns The number of days since January 1, 1970.
 */
export const getEpochDayId = (): number => {
  const oneDayMilliseconds = 24 * 60 * 60 * 1000;
  const today = new Date();
  const epoch = new Date(1970, 0, 1);
  return Math.floor((today.getTime() - epoch.getTime()) / oneDayMilliseconds);
};

/**
 * Get the number of weeks that have elapsed since the first week of the Unix epoch.
 * @returns The number of weeks since the first week of January 1970.
 */
export const getEpochWeekId = (): number => {
  const oneWeekMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const today = new Date();
  const epoch = new Date(1970, 0, 4);
  return Math.floor((today.getTime() - epoch.getTime()) / oneWeekMilliseconds);
};

/**
 * Round a number to the nearest multiple of a given value.
 * @param value The number to round.
 * @param nearest The value to round to.
 * @returns The rounded number.
 */
export const roundToNearest = (value: number, nearest: number): number => {
  return Math.round(value / nearest) * nearest;
}
