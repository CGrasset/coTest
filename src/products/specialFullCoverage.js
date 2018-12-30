const Product = require('./product');

class SpecialFullCoverage extends Product {
  updatePrice() {
    this.sellIn--;
    if (this.sellIn >= 10) {
      this.price += 1;
    }
    if (this.sellIn < 10 && this.sellIn >= 5) {
      this.price += 2;
    }
    if (this.sellIn < 5 && this.sellIn >= 0) {
      this.price += 3;
    }
    if (this.sellIn < 0) {
      this.price = 0;
    }
  }
}

module.exports = SpecialFullCoverage;
