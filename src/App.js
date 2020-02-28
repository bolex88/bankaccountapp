import React, { Component } from 'react';
import BankAccounts from './BankAccounts'
import AddBankAccount from './AddBankAccount'
import UpdateBankAccount from './UpdateBankAccount'


class App extends Component {
  state = {
    bankaccounts: [
      {id: 1, account_name: '', account_number: '', bank_name: '', bank_branch: ''}
    ]
  }
  editBankAccount = (id) => {
    const bankaccounts = this.state.bankaccounts.find(bankaccount =>{
      return bankaccount.id !== id
    })
    this.setState({
      bankaccounts
    })
  }
  deleteBankAccount = (id) => {
    const bankaccounts = this.state.bankaccounts.filter(bankaccount => {
      return bankaccount.id !== id
    });
    this.setState({
      bankaccounts
    })
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
          <BankAccounts bankaccounts={this.state.bankaccounts} deleteBankAccount={this.deleteBankAccount} />
          <AddBankAccount addBankAccount={this.addBankAccount} />
          <UpdateBankAccount updatebankaccount={this.state.bankaccounts} editBankAccount={this.editBankAccount} />
      </div>
    );
  }
  
}

export default App;
