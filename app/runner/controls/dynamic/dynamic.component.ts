import {Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, Type} from '@angular/core';

import { CoordinatesComponent } from '../coordinates/coordinates.component';

// Helper component to add dynamic components
@Component({
  selector: 'dynamic-control-wrapper',
  template: `<div #target></div>`
})
export class DynamicComponent {
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  @Input() type: Type<Component>;
  @Input() control;

  cmpRef: ComponentRef<Component>;
  private isViewInitialized:boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      // when the `type` input changes we destroy a previously
      // created component before creating the new one
      this.cmpRef.destroy();
    }
    console.log(this.type);
    let factory = this.componentFactoryResolver.resolveComponentFactory(CoordinatesComponent);
    this.cmpRef = this.target.createComponent(factory);
    // to access the created instance use
    (<any>this.cmpRef.instance).control = this.control;
    // this.compRef.instance.someOutput.subscribe(val => doSomething());
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
