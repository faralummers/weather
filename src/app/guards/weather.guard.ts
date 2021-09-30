import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {CountriesService} from '../services/countries.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherGuard implements CanActivate {

  constructor(private countriesService: CountriesService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.redirectToCountries();
  }

  redirectToCountries(): boolean {
    if (this.countriesService.isReachableWeather) {
      return true;
    } else {
      this.router.navigate(['countries']);
      return false;
    }
  }

}
