"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_zeroes_1 = require("./mock-zeroes");
var ZeroService = (function () {
    function ZeroService() {
    }
    ZeroService.prototype.getZeroes = function () {
        return Promise.resolve(mock_zeroes_1.ZEROES);
    };
    ZeroService.prototype.getZeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getZeroes()); }, 3000);
        });
    };
    return ZeroService;
}());
ZeroService = __decorate([
    core_1.Injectable()
], ZeroService);
exports.ZeroService = ZeroService;
//# sourceMappingURL=zero.service.js.map