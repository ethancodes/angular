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
var common_1 = require("@angular/common");
var zero_service_1 = require("./zero.service");
require("rxjs/add/operator/switchMap"); /* i'm so glad this follow this other import syntax wtf */
var ZeroDetailComponent = (function () {
    function ZeroDetailComponent(zeroService, route, location) {
        this.zeroService = zeroService;
        this.route = route;
        this.location = location;
    }
    ZeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.zeroService.getZero(+params['id']); })
            .subscribe(function (zero) { return _this.zero = zero; });
        /**
          According to the documentation:
          
          "The hero id is a number.
          Route parameters are always strings.
          So the route parameter value is converted to a number with the JavaScript (+) operator."
          
          I think that's the most annoying way to convert something to a number.
          parseInt(params['id']) would at least be a little less obscure
          Or just make the getZero() function do the conversion.
        */
    };
    ZeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    /** ... really? */
    ZeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.zeroService.update(this.zero)
            .then(function () { return _this.goBack(); });
    };
    return ZeroDetailComponent;
}());
ZeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'zero-detail',
        templateUrl: './zero-detail.component.html',
        styleUrls: ['./zero-detail.component.css']
    }),
    __metadata("design:paramtypes", [zero_service_1.ZeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], ZeroDetailComponent);
exports.ZeroDetailComponent = ZeroDetailComponent;
//# sourceMappingURL=zero-detail.component.js.map