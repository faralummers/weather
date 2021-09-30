import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CountriesRequestDataInterface} from '../interfaces/countries.interface';
import {CountriesFlagInterface} from '../interfaces/countriesFlag.inteface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  public chooseCapital = new BehaviorSubject('');
  countriesApi = 'https://countriesnow.space/api/v0.1/countries';
  public isReachableWeather = false;


  getCountriesList(): Observable<CountriesRequestDataInterface> {
    return this._http.get<CountriesRequestDataInterface>(`${this.countriesApi}/capital`)
  }

  getFlags(): Observable<CountriesFlagInterface> {
    return this._http.get<CountriesFlagInterface>(`${this.countriesApi}/info?returns=currency,flag,unicodeFlag,dialCode`)
  }
}
