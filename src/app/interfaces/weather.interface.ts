export interface WeatherInterface {
  main: Main;
  wind: Wind;
}

export type Main = {
  feels_like: number;
  temp: number;
  temp_max: number;
  temp_min: number
  humidity: number;
}

export type Wind = {
  speed: number;
  deg: number;
}
