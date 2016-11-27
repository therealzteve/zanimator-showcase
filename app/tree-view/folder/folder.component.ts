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

  constructor(private stateService: StateService){

  }

  ngOnInit() {
  }

}
