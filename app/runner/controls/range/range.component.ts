import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'range',
  moduleId: module.id,
  templateUrl: 'range.component.html'
})
export class RangeComponent {
  private zAnimator;
  private preview;

  @Input()
  public mycontrol;

  @Output() onChanged = new EventEmitter<any>();

  constructor(){

  }

  public sendChange(){
    this.onChanged.emit();
  }

  public getStepAmount(){
    if(typeof this.mycontrol.ref.step != 'undefined'){
      return this.mycontrol.ref.step;
    }
    return 1;
  }
}
