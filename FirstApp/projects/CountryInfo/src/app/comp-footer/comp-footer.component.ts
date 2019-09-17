import { Component, OnInit, Input } from '@angular/core';
import { countryDetails } from '../select-country/country.domain';

@Component({
  selector: 'app-comp-footer',
  template: `
    <p>
      comp-footer works!
      {{ctrD.name}}
      
    </p>
  `,
  styles: []
})
export class CompFooterComponent implements OnInit {

  @Input()
  ctrD : countryDetails
  constructor() { }

  ngOnInit() {
  }

}
