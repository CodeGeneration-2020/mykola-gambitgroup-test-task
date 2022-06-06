export type DataOptionType = { [key: number]: number };

export enum CaseVariants {
  testCase = "Test Case",
  customCase = "Custom Case",
}

export type CaseFileType = CaseVariants.testCase | CaseVariants.customCase | "";

export interface IParsedData {
  date: string;
  data: DataOptionType;
}
