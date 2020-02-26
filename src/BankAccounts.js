import React from 'react'


    const BankAccounts = ({bankaccounts, deleteBankAccount, editBankAccount}) => {

        const bankaccountList = bankaccounts.length ? ( 
            bankaccounts.map(bankacount => {
                return (
                    <div className="collection-it" key={bankacount.id}>
                       <span onClick={() => {deleteBankAccount(bankacount.id)}}>{bankacount.AccountName, bankacount.AccountNumber, bankacount.BankName, bankacount.BankBranch}</span>
                       
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