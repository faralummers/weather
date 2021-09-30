import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountriesComponent } from './pages/countries/countries/countries.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SearchCountryPipe } from './pipes/search-country.pipe';
import {WeatherComponent} from './pages/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    SearchCountryPipe,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
