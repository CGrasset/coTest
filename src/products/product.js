class Product {
  // Do not modify
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if(value > 50) { value = 50; }
    if(value < 0) { value = 0; }
    this._price = value;
  }

  updatePrice() {
    this.sellIn--;
    this.price = this.sellIn < 0 ? this.price - 2 : this.price - 1;
  }
}

module.exports = Product;
