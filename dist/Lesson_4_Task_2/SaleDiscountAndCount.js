"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDiscountAndCount = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SaleDiscountAndCount extends AbstractSelling_1.AbstractSelling {
    discount = 10;
    contDicount;
    constructor(product, amount, contDicount) {
        super(product, amount);
        this.contDicount = contDicount;
    }
    getPrice() {
        if (this.contDicount >= this._amount) {
            const resuit = (this._product._price * this._amount - (this._product._price * this._amount * 0.1)).toFixed(2);
            console.log(`Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${resuit}, скидка 10%`);
            return +resuit;
        }
        const resuit = (this._product._price - this.discount) * this._amount;
        console.log(`Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${resuit}, скидка 10$`);
        return resuit;
    }
}
exports.SaleDiscountAndCount = SaleDiscountAndCount;
