'use strict';

describe('Transaction', function() {

  var transaction = new Transaction(100.00,100.00, 'today');

  it('should be defined as an object', function() {
    expect(transaction instanceof(Transaction)).toBe(true);
  });

  it('should have an amount property', function() {
    expect(transaction.amount).toBe(100.00);
  });

  it('should have the correct date property', function() {
    expect(transaction.date).toBeDefined();
  });

  it('should have the correct date property', function() {
    expect(transaction.current_balance).toBe(100.00);
  });

  it('should have the correct date property', function() {
    expect(transaction.current_balance).toBeDefined();
  });
});
