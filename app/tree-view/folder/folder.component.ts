import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../state/state.service';

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

  constructor(private stateService: StateService){

  }

  ngOnInit() {
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
}
