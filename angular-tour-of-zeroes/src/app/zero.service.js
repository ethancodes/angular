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
require("rxjs/add/operator/toPromise"); // sigh
var ZeroService = (function () {
    function ZeroService(http) {
        this.http = http;
        this.zeroesUrl = 'api/zeroes';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ZeroService.prototype.getZero = function (id) {
        var url = this.zeroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ZeroService.prototype.getZeroes = function () {
        /* this is so ugly and it's not even clear what it's doing
            this is supposed to be better?
        */
        return this.http.get(this.zeroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ZeroService.prototype.getZeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getZeroes()); }, 3000);
        });
    };
    ZeroService.prototype.create = function (name) {
        return this.http
            .post(this.zeroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ZeroService.prototype.update = function (zero) {
        var url = this.zeroesUrl + "/" + zero.id;
        return this.http
            .put(url, JSON.stringify(zero), { headers: this.headers })
            .toPromise()
            .then(function () { return zero; })
            .catch(this.handleError);
        /* JSON.stringify() works by magic even though we never imported it anywhere? sure, why not. */
    };
    ZeroService.prototype.delete = function (id) {
        /* ah, yes. the promise of the void. */
        var url = this.zeroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    /* so, if i understand this correctly
      you never return a thing
      you return THE PROMISE of a thing
      */
    ZeroService.prototype.handleError = function (error) {
        console.error('Holy crap something went wrong', error);
        return Promise.reject(error.message || errror);
    };
    return ZeroService;
}());
ZeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ZeroService);
exports.ZeroService = ZeroService;
//# sourceMappingURL=zero.service.js.map