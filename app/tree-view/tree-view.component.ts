import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'my-tree-view',
  templateUrl: './tree-view.component.html',
  moduleId: module.id
})
export class TreeViewComponent implements OnInit {

  public treeView = { subFolders: [], examples: [] };

  constructor(private stateService: StateService){

    this.stateService.onNewExample.subscribe((example) => {
      console.log(example);
      var destFolder = this.treeView;

      for(var path of (<any>example).folder){
        var folder = this.findFolder(destFolder, path);
        if(!folder){
          folder = {
            name: path,
            subFolders: [],
            examples: []
          };
          destFolder.subFolders.push(folder);
        }
        destFolder = folder;
      }

      destFolder.examples.push(example);
    });

  }

  ngOnInit() {
  }

  private findFolder(folderToSearch, name){
    for(var subFolder of folderToSearch.subFolders){
      if(subFolder.name == name){
        return subFolder;
      }
    }
  }
}
