import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color',
  moduleId: module.id,
  templateUrl: 'color.component.html'
})
export class ColorComponent {
  private zAnimator;

  @Input()
  public mycontrol;

  @Output() onChanged = new EventEmitter<any>();

  constructor(){

  }

  public sendChange(){
    this.onChanged.emit();
  }
}
