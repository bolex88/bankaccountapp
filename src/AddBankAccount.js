import React, { Component } from 'react';

class AddBankAccount extends Component {
    state = {
            account_name: "",
            account_number: "",
            bank_name: "",
            bank_branch: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handelSubmit = (e) => {
        // console.log(this.state)
        e.preventDefault();
        this.props.addBankAccount(this.state);
        this.setState({
            account_name: "",
            account_number: "",
            bank_name: "",
            bank_branch: ""
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label>AccountName:</label>
                    <input type="text" name="account_name" onChange={this.handleChange} value={this.state.account_name} />
                    <label>AccountNumber:</label>
                    <input type="number" name="account_number" onChange={this.handleChange} value={this.state.account_number} />
                    <label>BankName:</label>
                    <input type="text" name="bank_name" onChange={this.handleChange} value={this.state.bank_name} />
                    <label>BankBranch:</label>
                    <input type="text" name="bank_branch" onChange={this.handleChange} value={this.state.bank_branch} />
                    <button className="btn blue" onSubmit={this.handelSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default AddBankAccount