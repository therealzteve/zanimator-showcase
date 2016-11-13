import { Component } from '@angular/core';
import { StateService } from '../state/state.service';


@Component({
  selector: 'my-runner',
  moduleId: module.id,
  templateUrl: 'runner.component.html'
})
export class RunnerComponent {
  private zAnimator;

  constructor(private stateService: StateService){

  }

  public runExample(){
    this.stateService.selectedExample.stop();
    this.stateService.selectedExample.run()
  }

  public onChanged(){
    console.log("change!");
    this.runExample();
  }
}
