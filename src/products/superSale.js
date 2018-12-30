const Product = require('./product');

class SuperSale extends Product {
  // Price degrades twice as fast
  updatePrice() {
    this.sellIn--;
    this.price = this.sellIn < 0 ? this.price - 4 : this.price - 2;
  }
}

module.exports = SuperSale;
