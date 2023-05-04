import { AbstractSelling } from "./AbstractSelling";

export class SaleDiscount extends AbstractSelling {
  discount: number = 10;
    
  getPrice(): number {
    const resuit = (this._product._price - this.discount) * this._amount
    // console.log(`Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${resuit} скидка 10$`);
    return resuit;
  }
  
  getInfoSaleDiscount(): string {
    return `Product: ${this._product.name}, количество: ${this._amount}, цена со скидкой ${this.getPrice()} скидка 10$`
  }
}
