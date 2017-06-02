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
var zero_1 = require("./zero");
var ZeroDetailComponent = (function () {
    function ZeroDetailComponent() {
    }
    return ZeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", zero_1.Zero)
], ZeroDetailComponent.prototype, "zero", void 0);
ZeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'zero-detail',
        template: "\n    <div *ngIf=\"zero\">\n        <h2>{{zero.name}} details...</h2>\n        <div><label>id: </label>{{zero.id}}</div>\n        <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"zero.name\" placeholder=\"name\">\n        </div>\n        <div>\n          <label>failures: </label>\n          <input [(ngModel)]=\"zero.failures\" placeholder=\"failures\">\n        </div>\n    </div>\n  "
    })
], ZeroDetailComponent);
exports.ZeroDetailComponent = ZeroDetailComponent;
//# sourceMappingURL=zero-detail.component.js.map