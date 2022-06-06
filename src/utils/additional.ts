import { DataOptionType } from "../common/types/parser.types";

export const getDifferenceBetweenArrays = (param?: DataOptionType) => {
  const keysParsedData = param && Object.keys(param as DataOptionType);
  const compareArray = Array.from({ length: 100 }, (v, k) => k + 1);

  if (keysParsedData?.length === 0) {
    return "Incorrect document";
  }

  if (keysParsedData && !!keysParsedData?.length) {
    const difference = compareArray.filter(
      (x) => !keysParsedData.includes(x.toString())
    );
    return `Missing elements: (${difference.join(",")})`;
  }

  return "Success";
};
