"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDiscount = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SaleDiscount extends AbstractSelling_1.AbstractSelling {
    discount = 10;
    getPrice() {
        const resuit = (this._product._price - this.discount) * this._amount;
        // console.log(`Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${resuit} скидка 10$`);
        return resuit;
    }
    getInfoSaleDiscount() {
        return `Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${this.getPrice()} скидка 10$`;
    }
}
exports.SaleDiscount = SaleDiscount;
