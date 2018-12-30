const productLoader = require('./products/loader');

class CarInsurance {
  constructor(products = []) {
    this.products = [];
    products.forEach((product) => {
      let className     = product.name.replace(/\s/g,'');
      let productClass  = productLoader(className);
      let newProduct    = new productClass(product.name, product.sellIn, product.price);
      this.products.push(newProduct);
    });
  }
  updatePrice() {
    this.products.forEach((product) => {
      product.updatePrice();
    });
    return this.products;
  }
}

module.exports = { CarInsurance }
