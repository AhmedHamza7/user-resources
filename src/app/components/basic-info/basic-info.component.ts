import { Component } from '@angular/core';

import {Store} from '@ngrx/store'

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent {
  files: File[] = [];
  minutesCount: number = 0;
  multiReserveCount:number = 0;
  showFixedCounter:boolean = false;
  showAppointmentsCounter:boolean = false

  constructor (private _store:Store<any>) {
    this._store.subscribe((data)=> this.showFixedCounter = data.showFixed.fixedTime)
    this._store.subscribe((data)=> this.showAppointmentsCounter = data.showFixed.fixedTime)
  }

  selectFixed(){
    this._store.dispatch({type: 'show-counter'})
  }

  unSelectFixed(){
    this._store.dispatch({type: 'hide-counter'})
  }

  onSelect(event:any) {
    console.log(event);
    this.files = [];
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}