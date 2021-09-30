import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountriesService} from '../../../services/countries.service';
import {Countries} from '../../../interfaces/countries.interface';
import {CountriesFlag} from '../../../interfaces/countriesFlag.inteface';
import {map, takeUntil} from 'rxjs/operators';
import {MixedFlagsAndCountriesInterface} from '../../../interfaces/mixedFlagsAndCountries.interface';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {

  private _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private countriesServices: CountriesService,
    private _router: Router
  ) { }

  arrCountries: Array<Countries> = [];
  arrFlags: Array<CountriesFlag> = [];
  mixedFlagsAndCountries: Array<MixedFlagsAndCountriesInterface> = [];
  countrySearch = '';

  ngOnInit(): void {
    this._getCountries();
    this._getFlags();
  }

  modifyArrCountries(): void {
    this.arrCountries.forEach(el => {
      this.arrFlags.forEach(el2 => {
        if(el.name === el2.name) {
          const mixed = {name: el.name,
                         flag: el2.flag,
                         capital: el.capital,
                  }
          this.mixedFlagsAndCountries.push(mixed);
        }
      })
    })
  }

   _getCountries(): void {
  this.countriesServices.getCountriesList()
    .pipe(takeUntil(this._unsubscribe$))
    .subscribe((res) => {
      this.arrCountries = res.data;
      this.modifyArrCountries()
    })
  }

    _getFlags(): void {
    this.countriesServices.getFlags()
      .pipe(
      takeUntil(this._unsubscribe$),
      map(res => res.data)
    )
      .subscribe((res) => {
      this.arrFlags = res;
      this.modifyArrCountries();
    })
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }


  chooseCapital(capital: string) {
    this._router.navigate(['/weather'])
    this.countriesServices.isReachableWeather = true;
    this.countriesServices.chooseCapital.next(capital);
  }
}
