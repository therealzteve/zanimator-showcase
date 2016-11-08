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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var StateService = (function () {
    function StateService(http) {
        this.http = http;
        this.examples = [];
        this.examplesUrl = "./.tmp/test.json";
    }
    StateService.prototype.init = function (zAnimator) {
        var _this = this;
        this.loadExamples().then(function (data) {
            for (var _i = 0, _a = data.examples; _i < _a.length; _i++) {
                var entry = _a[_i];
                System.import(entry).then(function (loadedExample) {
                    _this.examples.push(loadedExample.create(zAnimator));
                    _this.selectExample(_this.examples[0]);
                });
            }
        });
    };
    StateService.prototype.selectExample = function (example) {
        this.selectedExample = example;
    };
    StateService.prototype.loadExamples = function () {
        return this.http.get(this.examplesUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    StateService.prototype.getExamples = function () {
        return this.examples;
    };
    StateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StateService);
    return StateService;
}());
exports.StateService = StateService;
//# sourceMappingURL=state.service.js.map