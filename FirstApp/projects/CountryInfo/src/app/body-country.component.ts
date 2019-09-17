import { Component, OnInit, Input } from '@angular/core';
import { countryDetails } from './select-country/country.domain';

@Component({
  selector: 'app-body-country',
  templateUrl: './body-country.component.html',
  styleUrls: ['./body-country.component.css']
})
export class BodyCountryComponent implements OnInit {

  @Input()
  ctrD : countryDetails

  constructor() { }

  ngOnInit() {
  }

}
