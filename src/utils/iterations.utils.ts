export const getPropertyInArray = <T>(array: T[], property: keyof T): T[keyof T][] => {
  return array.map(item => item[property]);
};

export const findBiggerNumberInArray = (array: number[]) => {
  return Math.max.apply(null, array);
};
