import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-drag-control',
  templateUrl: './drag-control.component.html',
  moduleId: module.id
})
export class DragControlComponent {

  constructor(){
  }

  logLocation(event){
    console.log(event);
  }

}
