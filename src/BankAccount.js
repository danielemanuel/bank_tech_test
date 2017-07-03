(function(exports){

    function BankAccount(balance=0, statement = new BankStatement()) {
      this.balance = balance;
      this.statement = statement;
    };

    BankAccount.prototype.deposit = (amount) => {
      this.balance =+ amount;
      this.statement.addTransaction(amount, this.balance);
    };

    exports.BankAccount = BankAccount;
})(this);
