import { Component, OnInit, Input } from '@angular/core';
import { countryDetails } from './select-country/country.domain';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.css']
})
export class CountryFlagComponent implements OnInit {

  @Input()
  ctrD : countryDetails
  
  constructor() { }

  ngOnInit() {
  }

}
