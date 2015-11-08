var store = require('../src/store/NumberToPrimeStore');
var rewire = require('rewire');

//beforeEach(function () {
//  this.store = rewire("../src/store/NumberToPrimeStore");
//  //this.registeredCallback = this.store.__get__("dispatchToken");
//});

//describe("store", function () {
//  it("adds a user", function () {
//    this.registeredCallback({
//      actionType: "GET_PRIMES",
//      data: "9"
//    });
//    const primes = this.store.getState();
//    expect(primes.factors.length).to.equal(4);
//  });
//});