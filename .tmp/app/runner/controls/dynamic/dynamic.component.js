"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var control_components_service_1 = require("./control-components.service");
// Helper component to add dynamic components
var DynamicComponent = (function () {
    function DynamicComponent(componentFactoryResolver, compiler, controlComponentsService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.compiler = compiler;
        this.controlComponentsService = controlComponentsService;
        this.onChanged = new core_1.EventEmitter();
        this.isViewInitialized = false;
    }
    DynamicComponent.prototype.updateComponent = function () {
        var _this = this;
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            // when the `type` input changes we destroy a previously
            // created component before creating the new one
            this.cmpRef.destroy();
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(this.controlComponentsService.get(this.type));
        this.cmpRef = this.target.createComponent(factory);
        // to access the created instance use
        this.cmpRef.instance.mycontrol = this.mycontrol;
        this.cmpRef.instance.onChanged.subscribe(function () { return _this.publishOnChanged(); });
        // this.compRef.instance.someOutput.subscribe(val => doSomething());
    };
    /*  ngOnChanges() {
        this.updateComponent();
      } */
    DynamicComponent.prototype.ngAfterViewInit = function () {
        this.isViewInitialized = true;
        this.updateComponent();
    };
    DynamicComponent.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    DynamicComponent.prototype.publishOnChanged = function () {
        this.onChanged.emit();
    };
    return DynamicComponent;
}());
__decorate([
    core_1.ViewChild('target', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], DynamicComponent.prototype, "target", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.Type)
], DynamicComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DynamicComponent.prototype, "mycontrol", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DynamicComponent.prototype, "onChanged", void 0);
DynamicComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-control-wrapper',
        template: "<div #target></div>",
        providers: [control_components_service_1.ControlComponentsService]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.Compiler, control_components_service_1.ControlComponentsService])
], DynamicComponent);
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=dynamic.component.js.map