const Product = require ('./product');

class FullCoverage extends Product {
  updatePrice() {
    this.sellIn--;
    this.price = this.sellIn < 0 ? this.price + 2 : this.price + 1;
  }
}

module.exports = FullCoverage;
