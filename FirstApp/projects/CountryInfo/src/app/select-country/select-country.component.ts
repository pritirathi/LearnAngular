import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { countryDetails } from './country.domain';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {

@Input()
  ctrDetails : countryDetails
  
  @Output()
  evCountry : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

  selectCountry(countryName : string) 
  {
    
   console.log('from selectCountry '+countryName)

 this.evCountry.emit(countryName)
  }
}
