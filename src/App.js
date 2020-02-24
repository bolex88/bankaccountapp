import React, { Component } from 'react';
import BankAccounts from './BankAccounts'
import AddBankAccount from './AddBankAccount'


class App extends Component {
  state = {
    bankaccounts: [
      {id: 1, content: ''}
    ]
  }
  addBankAccount = (bankaccount) => {
    bankaccount.id = Math.random();
    let bankaccounts = [...this.state.bankaccounts, bankaccount]
    this.setState({
      bankaccounts
    })
  }
  render() {
    return (
      <div className="bankaccount-app container">
          <h1 className="center blue-text">Bank Accounts</h1>
          <BankAccounts bankaccounts={this.state.bankaccounts} />
          <AddBankAccount addBankAccount={this.addBankAccount} />
      </div>
    );
  }
  
}

export default App;
