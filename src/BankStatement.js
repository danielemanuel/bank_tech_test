(function(exports) {

    function BankStatement(history = new TransactionHistory()){
      this.history = history;
    };

    BankStatement.prototype = {
        addTransaction: function(amount, balance){
        this.history.addTransaction(amount, balance);
    }
};

    exports.BankStatement = BankStatement;
})(this);
