import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'coordinates',
  moduleId: module.id,
  templateUrl: 'coordinates.component.html'
})
export class CoordinatesComponent {
  private zAnimator;

  @Input()
  public mycontrol;

  @Output() onChanged = new EventEmitter<any>();

  constructor(){

  }



  public pickCoordinates(){
    var stage = new (<any>window).createjs.Stage("myCanvas");

    var cb = (event) => {
      this.handleClick(event);
      stage.removeAllEventListeners("stagemousedown");
    }

    stage.removeAllEventListeners("stagemousedown");
    stage.addEventListener("stagemousedown", cb);
    stage.update();
  }

  public handleClick(event){
    this.mycontrol.ref.x = Math.floor( event.stageX );
    this.mycontrol.ref.y = Math.floor( event.stageY );
    this.sendChange();
  }

  public sendChange(){
    this.onChanged.emit();
  }
}
