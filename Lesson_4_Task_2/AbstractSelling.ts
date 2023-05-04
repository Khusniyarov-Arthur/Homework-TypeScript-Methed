import { Product } from "./Product";

export abstract class AbstractSelling {
  _product: Product;
  _amount: number;

  constructor(product: Product, amount: number) {
    this._product = product;
    this._amount = amount;
  }

  set product (product: Product) {
    this._product = product;
  }

  get amount(): number {
    return this.amount;
  }

  set amount(amount: number) {
    this._amount = amount;
  }

  compare(item: AbstractSelling) {
    return this._product.price - item._product.price
  }
  abstract getPrice(): number;

}
