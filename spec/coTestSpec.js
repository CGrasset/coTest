const expect        = require('chai').expect;
const coTest        = require('../src/coTest');
const Product       = require('../src/products/product');
const CarInsurance  = coTest.CarInsurance;

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("foo");
  });

});
