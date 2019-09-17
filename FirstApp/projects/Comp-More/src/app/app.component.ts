import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Comp-More';
  @ViewChild('txt' ,{static : false})
  txt1 : ElementRef
  /*
  okClick(tx :any)
  {
    tx.style.border ="2px solid red"
  }*/

  okClick()
  {
    this.txt1.nativeElement.style.border="2px solid red"
  }

  ngAfterViewInit()
  {
    this.txt1.nativeElement.style.border="2px solid red"
  }

}
