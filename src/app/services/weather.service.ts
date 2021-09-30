import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  apiKey = '331028bb23fc08f0744d0d0333a63d89';
  weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=';

  getWeatherOfTheCapitalCity(city: string): Observable<any> {
    return this._http.get<any>(`${this.weatherApi}${city}&appid=${this.apiKey}`);
  }
}
