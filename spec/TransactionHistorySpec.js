'use strict';

describe('TransactionHistory', function() {

  var transactionHistory = new TransactionHistory();

  it('should be defined as an object', function() {
    expect(transactionHistory instanceof(TransactionHistory)).toBe(true);
  });

  it('should have a transaction property', function() {
    expect(transactionHistory.transactions).toBeDefined();
  });
});
