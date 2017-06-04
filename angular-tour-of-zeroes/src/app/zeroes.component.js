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
var router_1 = require("@angular/router");
var zero_service_1 = require("./zero.service");
var ZeroesComponent = (function () {
    function ZeroesComponent(zeroService, router) {
        this.zeroService = zeroService;
        this.router = router;
    }
    ZeroesComponent.prototype.onSelect = function (z) {
        this.selectedZero = z;
    };
    ZeroesComponent.prototype.ngOnInit = function () {
        this.getZeroes();
    };
    ZeroesComponent.prototype.getZeroes = function () {
        var _this = this;
        this.zeroService.getZeroes().then(function (zeroes) { return _this.zeroes = zeroes; });
    };
    ZeroesComponent.prototype.goToDetail = function () {
        this.router.navigate(['/zero', this.selectedZero.id]);
    };
    return ZeroesComponent;
}());
ZeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-zeroes',
        templateUrl: './zeroes.component.html',
        styleUrls: ['./zeroes.component.css'],
    }),
    __metadata("design:paramtypes", [zero_service_1.ZeroService,
        router_1.Router])
], ZeroesComponent);
exports.ZeroesComponent = ZeroesComponent;
//# sourceMappingURL=zeroes.component.js.map