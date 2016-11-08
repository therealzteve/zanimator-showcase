import { Component } from '@angular/core';
import { StateService } from './state/state.service';
declare var zAnimator: any;


@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1><canvas id="myCanvas"></canvas><my-runner></my-runner>'
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
