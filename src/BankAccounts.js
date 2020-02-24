import React from 'react'

const BankAccounts = ({bankaccounts}) => {
    const bankaccountList = bankaccounts.length ? (
        bankaccounts.map(bankaccount => {
            return (
                <div className="collection-it" key={bankaccount.id}>
                    <span>{bankaccount.content}</span>

                </div>
            )
        })
    ) : (
        <p className="center">You have no Bank Account</p>
    )
    return (
        <div className="bankaccount collection">
            {bankaccountList}
        </div>
    )
}

export default BankAccounts