import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from './pages/countries/countries/countries.component';
import {NgModule} from '@angular/core';
import {WeatherComponent} from './pages/weather/weather.component';
import {WeatherGuard} from './guards/weather.guard';

const routes: Routes = [
  {
    path: 'countries',
    component: CountriesComponent,
  },
  {
    path: 'weather',
    canActivate: [WeatherGuard],
    component: WeatherComponent
  },
  {
    path: '**',
    redirectTo: '/countries'
  },
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
