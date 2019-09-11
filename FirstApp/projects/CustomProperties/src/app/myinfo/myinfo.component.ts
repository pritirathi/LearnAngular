import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { infoDetails } from './myinfo.domain';
import { infoCard } from './myinfo.event';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  @Input()
  details : infoDetails


  @Output()
  evtInfo : EventEmitter<infoCard>= new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  okClk(parentInfo : string)
  {
    const infoVar : infoCard ={
      parent :  parentInfo,
      tmp : Date.now(),
      info : this.details

  }
    this.evtInfo.emit(infoVar)
  }
}
