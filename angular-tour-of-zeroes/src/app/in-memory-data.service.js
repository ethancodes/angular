"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var zeroes = [
            { id: 11, name: 'Mr. Nice', failures: 1 },
            { id: 12, name: 'Friendly', failures: 2 },
            { id: 13, name: 'Polite', failures: 4 },
            { id: 14, name: 'Helpful', failures: 8 },
            { id: 15, name: 'Cheerful', failures: 16 },
        ];
        return { zeroes: zeroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map