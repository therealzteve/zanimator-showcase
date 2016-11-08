import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

/* Services */
import { StateService } from './state/state.service';

/* Components */
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { RunnerComponent } from './runner/runner.component';
import { DynamicComponent } from './runner/controls/dynamic/dynamic.component';
import { CoordinatesComponent } from './runner/controls/coordinates/coordinates.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, TreeViewComponent, RunnerComponent, DynamicComponent, CoordinatesComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ StateService ],
  entryComponents: [CoordinatesComponent]
})
export class AppModule { }
