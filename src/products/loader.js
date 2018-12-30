// Add here new products
const Product             = require('./product')
const FullCoverage        = require('./fullCoverage');
const MegaCoverage        = require('./megaCoverage');
const SpecialFullCoverage = require('./specialFullCoverage');
const SuperSale           = require('./superSale');

const classes = { Product, FullCoverage, MegaCoverage, SpecialFullCoverage, SuperSale };

function productLoader (name) {
  if(name in classes) {
    return classes[name];
  } else {
    return Product;
  }
}

module.exports = productLoader;
