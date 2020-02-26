import React from 'react'


    const BankAccounts = ({bankaccounts, deleteBankAccount, editBankAccount}) => {

        const bankaccountList = bankaccounts.length ? ( 
            bankaccounts.map(bankacount => {
                return (
                    <div className="collection-it" key={bankacount.id}>
                       <span onClick={() => {deleteBankAccount(bankacount.id)}}>{bankacount.state}</span>
                       <span onClick={() => {editBankAccount(bankacount.id)}}>{bankacount.state}</span>
                    </div>
                )
            })
        ) : (
            <p className="center">You have no Bank Account!</p>
        )
        return (
            <div className="bankaccounts collection">
                {bankaccountList}
            </div>
        )
}

export default BankAccounts