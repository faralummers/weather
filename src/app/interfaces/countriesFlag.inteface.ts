export interface CountriesFlagInterface {
  data: Array<CountriesFlag>;
}

export type CountriesFlag = {
  name: string,
  currency: string,
  unicodeFlag: string,
  flag: string,
  dialcode: string;
}
