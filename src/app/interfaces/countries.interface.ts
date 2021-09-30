export interface CountriesRequestDataInterface {
  data: Array<Countries>;
}

export type Countries = {
  name: string;
  capital: string;
}
