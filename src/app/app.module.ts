import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './country/countries/countries.component';
import { CitiesComponent } from './city/cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
