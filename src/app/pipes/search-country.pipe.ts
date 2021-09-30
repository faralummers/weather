import { Pipe, PipeTransform } from '@angular/core';
import {MixedFlagsAndCountriesInterface} from '../interfaces/mixedFlagsAndCountries.interface';

@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {

  transform(value: Array<MixedFlagsAndCountriesInterface>, search: string): Array<MixedFlagsAndCountriesInterface> {
    if(!search) {
      return value;
    }
    if(!value) {
      return [];
    }
    return value.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
  }

}
