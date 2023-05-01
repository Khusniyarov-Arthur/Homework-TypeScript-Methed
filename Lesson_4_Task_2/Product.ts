export class Product {
  _name: string;
  _price: number;

  constructor(name: string, price: number) {
    this._name = name
    this._price = price
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this.name = name;
  }
}

