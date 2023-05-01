"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _name;
    _price;
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this.name = name;
    }
}
exports.Product = Product;
