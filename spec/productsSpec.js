const expect = require('chai').expect;
const coTest = require('../src/coTest');
const Product = require('../src/products/product');
const CarInsurance = coTest.CarInsurance;

describe('Products Test', function() {
  const name = 'foo';
  it('price should never be more than 50', function() {
    const product = new Product(name, 1, 52);
    expect(product.price).equal(50);
  });

  it('price should never be negative', function() {
    const product = new Product(name, 1, -1);
    expect(product.price).equal(0);
  });

  describe('on update', function() {
    it('should decrement sellIn', function() {
      const coTest = new CarInsurance([ new Product(name, 1, 1) ]);
      const products = coTest.updatePrice();
      expect(products[0].sellIn).equal(0);
    });

    it('should decrement price', function() {
      const coTest = new CarInsurance([ new Product(name, 1, 1) ]);
      const products = coTest.updatePrice();
      expect(products[0].price).equal(0);
    });

    it('price should never be negative', function() {
      const coTest = new CarInsurance([ new Product(name, 0, 0) ]);
      const products = coTest.updatePrice();
      expect(products[0].price).equal(0);
    });

    describe('when sell by date has passed', function() {
      it('price should degrade twice as fast', function() {
        const coTest = new CarInsurance([ new Product(name, 0, 3) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(1);
      });
    });
  });

  describe('Full Coverage Product', function() {
    let productName = 'Full Coverage';
    describe('on update', function() {
      it('should decrement sellIn', function() {
        const coTest = new CarInsurance([ new Product(productName, 1, 1) ]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(0);
      });

      it('should increment price', function() {
        const coTest = new CarInsurance([ new Product(productName, 1, 1) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(2);
      });

      it('price should never be more than 50', function() {
        const coTest = new CarInsurance([ new Product(productName, 1, 50) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(50);
      });
    });
  });

  describe('Mega Coverage Product', function() {
    let productName = 'Mega Coverage';

    describe('on update', function() {
      it('price should always be 80', function() {
        const coTest = new CarInsurance([ new Product(productName, 1, 5) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(80);
      });

      it('sellIn should never be altered', function() {
        const coTest = new CarInsurance([ new Product(productName, 1, 80) ]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(1);
      });
    });
  });

  describe('Special Full Coverage', function() {
    let productName = 'Special Full Coverage';

    describe('on update', function() {
      describe('when more than 10 days left', function() {
        it('price should increase by 1', function() {
          const coTest = new CarInsurance([ new Product(productName, 12, 40) ]);
          const products = coTest.updatePrice();
          expect(products[0].price).equal(41);
        });
      });

      describe('when between 10 and 5 days left', function() {
        it('price should increase by 2', function() {
          const coTest = new CarInsurance([ new Product(productName, 10, 40) ]);
          const products = coTest.updatePrice();
          expect(products[0].price).equal(42);
        });
      });

      describe('when 5 days left', function() {
        it('price should increase by 3', function() {
          const coTest = new CarInsurance([ new Product(productName, 5, 40) ]);
          const products = coTest.updatePrice();
          expect(products[0].price).equal(43);
        });
      });

      describe('when no more days left', function() {
        it('price should drop to 0', function() {
          const coTest = new CarInsurance([ new Product(productName, 0, 40) ]);
          const products = coTest.updatePrice();
          expect(products[0].price).equal(0);
        });
      });
    });
  });

  describe('Super Sale', function() {
    let productName = 'Super Sale';

    describe('on update', function() {
      it('price should decrement by 2', function() {
        const coTest = new CarInsurance([ new Product(productName, 1, 20) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(18);
      });
    });

    describe('when sell by date has passed', function() {
      it('price should degrade twice as fast', function() {
        const coTest = new CarInsurance([ new Product(productName, 0, 10) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(6);
      });
    });
  });
});
