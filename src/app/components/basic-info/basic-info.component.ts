import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
  files: File[] = [];
  minutesCount: number = 0
  multiReserveCount:number = 0

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