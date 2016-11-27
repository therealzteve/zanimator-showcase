import { Component } from '@angular/core';
import { StateService } from './state/state.service';
declare var zAnimator: any;


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  moduleId: module.id
})
export class AppComponent {
  private zAnimator;

  constructor(private stateService: StateService){

  }

  ngAfterViewInit(){
    this.zAnimator = zAnimator.create("myCanvas");
    this.stateService.init(this.zAnimator);
  }
}
