import React, { Component } from 'react';

class AddBankAccount extends Component {
    state = {
        AccountName: "",
        AccountNumber: "",
        BankName: "",
        BankBranch: ""
    }
    handleChange = (e) => {
        this.setState({
            AccountName: e.target.value,
            AccountNumber: e.target.value,
            BankName: e.target.value,
            BankBranch: e.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.addBankAccount(this.state);
        this.setState({
            AccountName: '',
            AccountNumber: '',
            BankName: '',
            BankBranch: ''
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label>AccountName:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <label>AccountNumber:</label>
                    <input type="number" onChange={this.handleChange} value={this.state.content} />
                    <label>BankName:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <label>BankBranch:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddBankAccount