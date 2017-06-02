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
var zero_service_1 = require("./zero.service");
var AppComponent = (function () {
    function AppComponent(zeroService) {
        this.zeroService = zeroService;
        this.title = 'Tour of Zeroes';
    }
    AppComponent.prototype.onSelect = function (z) {
        this.selectedZero = z;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getZeroes();
    };
    AppComponent.prototype.getZeroes = function () {
        var _this = this;
        this.zeroService.getZeroesSlowly().then(function (zeroes) { return _this.zeroes = zeroes; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    \n    <h2>The Zeroes</h2>\n    <ul class=\"zeroes\">\n        <li *ngFor=\"let z of zeroes\" \n            [class.selected]=\"z === selectedZero\"\n            (click)=\"onSelect(z)\">\n            <span class=\"badge\">{{z.id}}</span>\n            {{z.name}}\n        </li>\n    </ul>\n    \n    <zero-detail [zero]=\"selectedZero\"></zero-detail>\n  ",
        styles: ["\n      .selected {\n    \tbackground-color: #CFD8DC !important;\n    \tcolor: white;\n      }\n      .zeroes {\n    \tmargin: 0 0 2em 0;\n    \tlist-style-type: none;\n    \tpadding: 0;\n    \twidth: 15em;\n      }\n      .zeroes li {\n    \tcursor: pointer;\n    \tposition: relative;\n    \tleft: 0;\n    \tbackground-color: #EEE;\n    \tmargin: .5em;\n    \tpadding: .3em 0;\n    \theight: 1.6em;\n    \tborder-radius: 4px;\n      }\n      .zeroes li.selected:hover {\n    \tbackground-color: #BBD8DC !important;\n    \tcolor: white;\n      }\n      .zeroes li:hover {\n    \tcolor: #607D8B;\n    \tbackground-color: #DDD;\n    \tleft: .1em;\n      }\n      .zeroes .text {\n    \tposition: relative;\n    \ttop: -3px;\n      }\n      .zeroes .badge {\n    \tdisplay: inline-block;\n    \tfont-size: small;\n    \tcolor: white;\n    \tpadding: 0.8em 0.7em 0 0.7em;\n    \tbackground-color: #607D8B;\n    \tline-height: 1em;\n    \tposition: relative;\n    \tleft: -1px;\n    \ttop: -4px;\n    \theight: 1.8em;\n    \tmargin-right: .8em;\n    \tborder-radius: 4px 0 0 4px;\n      }\n  "],
        providers: [zero_service_1.ZeroService]
    }),
    __metadata("design:paramtypes", [zero_service_1.ZeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map