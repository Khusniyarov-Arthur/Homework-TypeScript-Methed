"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    _product;
    _amount;
    constructor(product, amount) {
        this._product = product;
        this._amount = amount;
    }
    set product(product) {
        this._product = product;
    }
    get amount() {
        return this.amount;
    }
    set amount(amount) {
        this._amount = amount;
    }
    compare(item) {
        return this._product.price - item._product.price;
    }
}
exports.AbstractSelling = AbstractSelling;
