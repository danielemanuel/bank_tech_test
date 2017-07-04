(function(exports) {

  var HEADERS = 'date        || credit || debit  || balance';

  function BankStatement(history = new TransactionHistory()) {
    this.history = history;
  }

  BankStatement.prototype = {
    addTransaction: function(amount, balance) {
      this.history.addTransaction(amount, balance);
    },

    display: function(){
      var display = HEADERS + '\n';
      this.history.transactions.forEach(function(element){
        display += formatData(element.date);
        display += '    || ';
        if(element.amount > 0) {
          display += element.amount.toFixed(2);
          display += ' || ';
          display += '      ';
          display += ' || ';
        }
        if(element.amount < 0) {
          display += '      ';
          display += ' ||  ';
          display += Math.abs(element.amount).toFixed(2);
          display +=' ||  ';
        }
        display += element.current_balance.toFixed(2);
        display += '\n';
      });
      return display;
    }
  };

  function formatData(date) {
    var day = (date.getDate()).toString();
    var month = (date.getMonth()).toString();
    var year = (date.getFullYear()).toString();
    if(day.length === 1 ){
      day = '0' + month;
    }
    return day + '/' + month + '/' + year;
  }

  exports.BankStatement = BankStatement;

})(this);
