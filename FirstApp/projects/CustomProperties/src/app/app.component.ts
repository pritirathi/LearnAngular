import { Component } from '@angular/core';
import { infoDetails } from './myinfo/myinfo.domain';
import { infoCard } from './myinfo/myinfo.event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomProperties';

  obj :infoDetails ={
  name :  "Priti",
  city :  "Pune",
  country : "India",
  navbar : "https://getbootstrap.com/docs/4.0/components/card/"
  

  }
  onClkApp(evInfo : infoCard)
  {
    console.log(evInfo)

  }
}
