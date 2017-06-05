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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ZeroSearchService = (function () {
    function ZeroSearchService(http) {
        this.http = http;
    }
    ZeroSearchService.prototype.search = function (term) {
        return this.http
            .get("app/zeroes/?name=" + term)
            .map(function (response) { return response.json().data; });
        /* so, wait, now we're not converting it to a Promise?
          it's a map?
          tutorial says "RxJS operator chaining makes response processing easy and readable."
          bullshit.
        */
    };
    return ZeroSearchService;
}());
ZeroSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ZeroSearchService);
exports.ZeroSearchService = ZeroSearchService;
//# sourceMappingURL=zero-search.service.js.map