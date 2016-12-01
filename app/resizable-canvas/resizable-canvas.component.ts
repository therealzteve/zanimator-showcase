import { Component, Input, Output, EventEmitter } from '@angular/core';
declare var zAnimator: any;


@Component({
  selector: 'my-resizable-canvas',
  templateUrl: './resizable-canvas.component.html',
  moduleId: module.id
})
export class ResizableCanvasComponent {
  public zAnimator;

  @Input()
  public width;

  @Input()
  public height;

  @Output() animatorInitialized = new EventEmitter();

  private white = true;
  private canvasId = "myCanvas";

  constructor(){
  }

  public switchBW(){
    if(this.white){
      document.getElementById(this.canvasId).style.backgroundColor = "#000";
    }else{
      document.getElementById(this.canvasId).style.backgroundColor = "#FFF";
    }
    this.white = !this.white;
  }

  ngAfterViewInit(){
    this.zAnimator = zAnimator.create(this.canvasId);
    this.animatorInitialized.emit(this.zAnimator);
  }
}
