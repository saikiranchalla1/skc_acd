"use strict";
var Shelf = (function () {
    function Shelf() {
        this._items = new Array();
    }
    Shelf.prototype.add = function (item) {
        this._items.push(item);
    };
    Shelf.prototype.getFirst = function () {
        return this._items[0];
    };
    return Shelf;
}());
exports.Shelf = Shelf;
//# sourceMappingURL=Shelf.js.map