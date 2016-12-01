import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

/* Services */
import { StateService } from './state/state.service';

/* Components */
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FolderComponent } from './tree-view/folder/folder.component';
import { RunnerComponent } from './runner/runner.component';
import { DynamicComponent } from './runner/controls/dynamic/dynamic.component';
import { CoordinatesComponent } from './runner/controls/coordinates/coordinates.component';
import { ResizableCanvasComponent } from './resizable-canvas/resizable-canvas.component';
import { DragControlComponent } from './resizable-canvas/drag-control/drag-control.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TreeViewComponent, FolderComponent, RunnerComponent, DynamicComponent, CoordinatesComponent, ResizableCanvasComponent, DragControlComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ StateService ],
  entryComponents: [CoordinatesComponent]
})
export class AppModule { }
