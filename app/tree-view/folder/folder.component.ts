import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../state/state.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'my-tree-folder',
  templateUrl: './folder.component.html',
  moduleId: module.id
})
export class FolderComponent implements OnInit {

  @Input()
  public folder;

  @Input()
  public searchword;

  public canvasData;

  constructor(private stateService: StateService,  private router: Router){

  }



  ngOnInit() {
    this.stateService.onCanvasChange.subscribe((canvasData) => {
      this.canvasData = canvasData;
    });
  }

  public getVisibleExamples(){
    var visibleExamples = [];
    for(var example of this.folder.examples){
      if(example.visible){
        visibleExamples.push(example);
      }
    }
    return visibleExamples;
  }

  public getVisibleFolders(){
    var visibleFolders = [];

    for(var subFolder of this.folder.subFolders){
      if(!subFolder.empty){
        visibleFolders.push(subFolder);
      }
    }
    return visibleFolders;
  }

  public selectExample(example){
    var routeArray = ['/app', example.folder.join() + ',' + example.name];
    if(this.canvasData){
      routeArray.push(this.canvasData);
    }
    this.router.navigate(routeArray);
  }
}
