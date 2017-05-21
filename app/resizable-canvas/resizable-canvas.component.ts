import { Router }   from '@angular/router';
import { StateService } from '../state/state.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
declare var zAnimator: any;


@Component({
  selector: 'my-resizable-canvas',
  templateUrl: './resizable-canvas.component.html',
  moduleId: module.id
})
export class ResizableCanvasComponent implements OnInit{
  public zAnimator;

  @Input()
  public width;

  @Input()
  public height;

  @Output() animatorInitialized = new EventEmitter();

  private white = true;
  private canvasId = "myCanvas";

  constructor(private router: Router, private stateService: StateService){
  }

  public ngOnInit(){
    this.stateService.onCanvasChange.subscribe((data) => {
      (<any>document.getElementById(this.canvasId)).height = data['height'];
      (<any>document.getElementById(this.canvasId)).width = data['width'];
    });
  }

  public switchBW(){
    if(this.white){
      document.getElementById(this.canvasId).style.backgroundColor = "#000";
    }else{
      document.getElementById(this.canvasId).style.backgroundColor = "#FFF";
    }
    this.white = !this.white;
  }

  public resizeCanvasHorizontal(event){
    (<any>document.getElementById(this.canvasId)).width = (<any>document.getElementById(this.canvasId)).width + event.x;
    this.updateRoute();
  }

  public resizeCanvasVertical(event){
    (<any>document.getElementById(this.canvasId)).height = (<any>document.getElementById(this.canvasId)).height + event.y;
    this.updateRoute();
  }

  ngAfterViewInit(){
    this.zAnimator = zAnimator.create(this.canvasId);
    this.animatorInitialized.emit(this.zAnimator);
  }

  updateRoute(){
    var examplePath;
    if(this.stateService.selectedExample){
      examplePath = this.stateService.selectedExample.folder.join() + ',' + this.stateService.selectedExample.name;
    }else{
      examplePath = "0";
    }

    this.router.navigate([
      '/app',
      examplePath,
      {
        width: (<any>document.getElementById(this.canvasId)).width,
        height: (<any>document.getElementById(this.canvasId)).height,
      }]);
  }
}
