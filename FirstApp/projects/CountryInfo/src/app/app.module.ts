import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectCountryComponent } from './select-country/select-country.component';
import { BodyCountryComponent } from './body-country.component';
import { CompFooterComponent } from './comp-footer/comp-footer.component';
import { CountryFlagComponent } from './country-flag.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCountryComponent,
    BodyCountryComponent,
    CompFooterComponent,
    CountryFlagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
