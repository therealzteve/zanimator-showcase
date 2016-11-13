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
var CoordinatesComponent = (function () {
    function CoordinatesComponent() {
        this.onChanged = new core_1.EventEmitter();
    }
    CoordinatesComponent.prototype.pickCoordinates = function () {
        var _this = this;
        var stage = new window.createjs.Stage("myCanvas");
        var cb = function (event) {
            _this.handleClick(event);
            stage.removeAllEventListeners("stagemousedown");
        };
        stage.removeAllEventListeners("stagemousedown");
        stage.addEventListener("stagemousedown", cb);
        stage.update();
    };
    CoordinatesComponent.prototype.handleClick = function (event) {
        this.mycontrol.ref.x = Math.floor(event.stageX);
        this.mycontrol.ref.y = Math.floor(event.stageY);
        this.sendChange();
    };
    CoordinatesComponent.prototype.sendChange = function () {
        this.onChanged.emit();
    };
    return CoordinatesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CoordinatesComponent.prototype, "mycontrol", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CoordinatesComponent.prototype, "onChanged", void 0);
CoordinatesComponent = __decorate([
    core_1.Component({
        selector: 'coordinates',
        moduleId: module.id,
        templateUrl: 'coordinates.component.html'
    }),
    __metadata("design:paramtypes", [])
], CoordinatesComponent);
exports.CoordinatesComponent = CoordinatesComponent;
//# sourceMappingURL=coordinates.component.js.map