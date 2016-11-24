import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'my-tree-view',
  templateUrl: './tree-view.component.html',
  moduleId: module.id
})
export class TreeViewComponent implements OnInit {

  public treeView;

  constructor(private stateService: StateService){
    this.stateService.onNewExample.subscribe((example) => {
      console.log("AAAA");
    });
  }

  ngOnInit() {
    console.log("tree view init");
  }
}
