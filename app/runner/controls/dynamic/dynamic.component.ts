import {Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, Type, Output, EventEmitter} from '@angular/core';

import { ControlComponentsService } from './control-components.service';

// Helper component to add dynamic components
@Component({
  selector: 'dynamic-control-wrapper',
  template: `<div #target></div>`,
  providers: [ControlComponentsService]
})
export class DynamicComponent {
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  @Input() type: Type<Component>;
  @Input() mycontrol;

  @Output() onChanged = new EventEmitter<any>();

  cmpRef: ComponentRef<Component>;
  private isViewInitialized:boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler, private controlComponentsService: ControlComponentsService) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      // when the `type` input changes we destroy a previously
      // created component before creating the new one
      this.cmpRef.destroy();
    }
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.controlComponentsService.get(this.type));
    this.cmpRef = this.target.createComponent(factory);
    // to access the created instance use
    (<any>this.cmpRef.instance).mycontrol = this.mycontrol;

    (<any>this.cmpRef.instance).onChanged.subscribe( () => this.publishOnChanged());
    // this.compRef.instance.someOutput.subscribe(val => doSomething());
  }

/*  ngOnChanges() {
    this.updateComponent();
  } */

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  publishOnChanged(){
    this.onChanged.emit();
  }

}
