const Product = require('./product');

class MegaCoverage extends Product {
  get price() {
    return this._price;
  }
  // Price always set to 80
  set price(value) {
    this._price = 80;
  }

  get sellIn() {
    return this._sellIn;
  }

  // Set sellIn on initialize
  // Never modify it later
  set sellIn(value) {
    if(typeof this.sellIn === 'undefined'){
      this._sellIn = value;
    }
  }

  updatePrice() {}
}

module.exports = MegaCoverage;
