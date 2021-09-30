import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Subject} from 'rxjs';
import {CountriesService} from '../../services/countries.service';
import {WeatherInterface} from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  private _unsubscribe$: Subject<void> = new Subject<void>();
  chosenCapital = '';
  weather: WeatherInterface | undefined;
  tempCelcius: string | null = '';


  constructor(private weatherService: WeatherService,
              private countryService: CountriesService) { }

  ngOnInit(): void {
    this._getWeather();
  }


  _getWeather(): void {
    this.countryService.chooseCapital.subscribe(res => this.chosenCapital = res);
    this.weatherService.getWeatherOfTheCapitalCity(this.chosenCapital)
      .pipe()
      .subscribe(res => {
          this.weather = res
          this.tempCelcius = this.weather?.main.temp ? (this.weather.main.temp - 273.15).toFixed() : null;
      })
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
