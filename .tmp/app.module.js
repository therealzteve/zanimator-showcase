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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
/* Services */
var state_service_1 = require('./state/state.service');
/* Components */
var app_component_1 = require('./app.component');
var tree_view_component_1 = require('./tree-view/tree-view.component');
var runner_component_1 = require('./runner/runner.component');
var dynamic_component_1 = require('./runner/controls/dynamic/dynamic.component');
var coordinates_component_1 = require('./runner/controls/coordinates/coordinates.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, tree_view_component_1.TreeViewComponent, runner_component_1.RunnerComponent, dynamic_component_1.DynamicComponent, coordinates_component_1.CoordinatesComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [state_service_1.StateService],
            entryComponents: [coordinates_component_1.CoordinatesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map