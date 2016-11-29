import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'my-tree-view',
  templateUrl: './tree-view.component.html',
  moduleId: module.id
})
export class TreeViewComponent implements OnInit {

  public treeView = { subFolders: [], examples: [] };

  public searchword;

  constructor(private stateService: StateService){

    this.stateService.onNewExample.subscribe((example) => {
      var destFolder = this.treeView;

      for(var path of (<any>example).folder){
        var folder = this.findFolder(destFolder, path);
        if(!folder){
          folder = {
            name: path,
            subFolders: [],
            examples: [],
            empty: false
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

  public handleSearch($event, folder){
    var allHidden = true;

    // Check examples
    for(var entry of folder.examples){
      if(entry.name.toLowerCase().indexOf($event.toLowerCase()) !== -1){
        entry.visible = true;
        allHidden = false;
      }else{
        entry.visible = false;
      }
    }

    // Check subfolders
    for(var subFolder of folder.subFolders){
      this.handleSearch($event, subFolder);
      if(!subFolder.empty){
        allHidden = false;
      }
    }

    folder.empty = allHidden;

  }

  private findFolder(folderToSearch, name){
    for(var subFolder of folderToSearch.subFolders){
      if(subFolder.name == name){
        return subFolder;
      }
    }
  }
}
