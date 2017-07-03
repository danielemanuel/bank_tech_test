'use strict';

describe('BankAccount', function() {

    var bankAccount = new BankAccount;
    var bankStatement = new BankStatement;

    it('should be an defined as an object', function() {
      expect(bankAccount instanceof(BankAccount)).toBe(true);
    });

    it('has a balance property', function() {
        expect(bankAccount.balance).toBeDefined();
    });

    it('displays the current balance property as a float', function(){
        expect(bankAccount.balance).toBe(0.00);
    });

    it('should have a statement', function() {
        expect(bankAccount.statement).toBeDefined();
    });
});
