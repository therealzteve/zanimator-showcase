import { Injectable } from '@angular/core';
import { CoordinatesComponent } from '../coordinates/coordinates.component';
import { ColorComponent } from '../color/color.component';
import { RangeComponent } from '../range/range.component';

@Injectable()
export class ControlComponentsService {
  private components = {};

  constructor(){
    this.components['coordinates'] = CoordinatesComponent;
    this.components['color'] = ColorComponent;
    this.components['range'] = RangeComponent;
  }

  get(selectorName){
    var component = this.components[selectorName];
    return component;
  }
}
