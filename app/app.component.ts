import { Component, OnInit } from '@angular/core';
import { StateService } from './state/state.service';

declare var zAnimator: any;


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  moduleId: module.id
})
export class AppComponent{
  private zAnimator;
  private white = true;

  constructor(private stateService: StateService){

  }


  public switchBW(){
    if(this.white){
      document.getElementById("myCanvas").style.backgroundColor = "#000";
    }else{
      document.getElementById("myCanvas").style.backgroundColor = "#FFF";
    }
    this.white = !this.white;
  }

  canvasInitialized(animator){
    this.stateService.init(animator);
  }
}
