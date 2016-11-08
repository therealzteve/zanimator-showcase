import { Injectable } from '@angular/core';
import { CoordinatesComponent } from '../coordinates/coordinates.component';

@Injectable()
export class ControlComponentsService {
  private components = {};

  constructor(){
    this.components['coordinates'] = CoordinatesComponent;
  }

  get(selectorName){
    var component = this.components[selectorName];
    return component;
  }
}
