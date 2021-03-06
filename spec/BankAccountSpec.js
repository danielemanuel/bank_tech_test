'use strict';

describe('BankAccount', function() {

    var bankAccount = new BankAccount;
    var bankStatement = new BankStatement;

    it('should be defined as an object', function() {
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

    describe('#deposit', function() {

        it('should increase the balance', function() {
            bankAccount.deposit(100.00);
            expect(bankAccount.balance).toEqual(100.00);
        });
    });

    describe('#withdraw', function() {

        it('should decrease the balance', function() {
            bankAccount.deposit(100.00);
            bankAccount.withdraw(10);
            expect(bankAccount.balance).toEqual(90.00);
        });

        it('throws an error if withdraw more than the initial balance', function() {
          bankAccount.deposit(100.00);
          expect(function(){bankAccount.withdraw(110.00); }).toThrowError("Inssuficient credit!");
        })
    });

    describe('#viewStatement', function() {

        it('return a string', function() {
            expect(typeof bankAccount.viewStatement()).toBe('string');
        });
    });
});
