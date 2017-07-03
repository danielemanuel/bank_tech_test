'use strict';

describe('BankStatement', function() {

  var bankStatement = new BankStatement();

  it('should be defined as an object', function() {
    expect(bankStatement instanceof(BankStatement)).toBe(true);
  });

  it('should have a history property', function() {
    expect(bankStatement.history).toBeDefined();
  });
});
