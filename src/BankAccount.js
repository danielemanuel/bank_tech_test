(function(exports){

  function BankAccount(balance=0, statement = new BankStatement()) {
    this.balance = balance;
    this.statement = statement;
  };

  BankAccount.prototype =  {
    deposit: function(amount) {

      this.balance =+ amount;
      this.statement.addTransaction(amount, this.balance);
    },

    withdraw: function(amount) {
      if(amount <= this.balance ){
        this.balance -= amount;
        this.statement.addTransaction(-amount, this.balance);
      } else {
        throw Error("Inssuficient credit!");
      }
    },

    viewStatement: function(){
      return this.statement.display();
    }
  };

  exports.BankAccount = BankAccount;
})(this);

// b = new BankAccount();
// b.deposit(100);
// b.withdraw(20);
// b.deposit(120);
// b.deposit(110);
// b.deposit(1110);
// b.withdraw(500)
// b.viewStatement();
