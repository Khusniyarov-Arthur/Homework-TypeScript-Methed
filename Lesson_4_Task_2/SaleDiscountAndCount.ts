import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class SaleDiscountAndCount extends AbstractSelling {
  discount: number = 10;
  contDicount: number;

  constructor(product: Product, amount: number, contDicount: number) {
    super(product, amount)
    this.contDicount = contDicount;
  }
    
  getPrice(): number {
    if(this.contDicount >= this._amount) {
      const resuit = (this._product._price  * this._amount - (this._product._price  * this._amount * 0.1)).toFixed(2)
      // console.log(`Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${resuit}, скидка 10%`);
      return +resuit
    }
      const resuit = (this._product._price - this.discount) * this._amount
      // console.log(`Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${resuit}, скидка 10$`);
      return resuit
  }

  getInfoSaleDiscountAndCount(): string {
    if(this.contDicount >= this._amount) {
      return `Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${this.getPrice()}, скидка 10%`
    }
    return `Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${this.getPrice()}, скидка 10$`
  }
}
