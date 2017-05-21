import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { ActivatedRoute, Params }   from '@angular/router';


@Component({
  selector: 'my-runner',
  moduleId: module.id,
  templateUrl: 'runner.component.html'
})
export class RunnerComponent implements OnInit{
  private zAnimator;


  constructor(private stateService: StateService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      if(params['width'] && params['height']){
        this.stateService.changeCanvas(params['width'], params['height']); 
      }
      var pathAsArray = params['id'].split(',');
      var exampleName = pathAsArray[pathAsArray.length - 1];
      pathAsArray.splice(-1,1)
      this.stateService.selectExampleByName(pathAsArray, exampleName);
    })
  }

  public runExample(){
    this.stateService.selectedExample.stop();
    this.stateService.selectedExample.run()
  }

  public stopExample(){
    this.stateService.selectedExample.stop();
  }

  public onChanged(){
    this.runExample();
  }
}
