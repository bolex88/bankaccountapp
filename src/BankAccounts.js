import React from 'react'


    const BankAccounts = ({bankaccounts, deleteBankAccount}) => {

        const bankaccountList = bankaccounts.length ? ( 
            bankaccounts.map(bankacount => {
                // console.log(bankaccounts)
                return (
                    <div className="collection-it" key={bankacount.id}>
                       <span onClick={() => {deleteBankAccount(bankacount.id)}}>{bankacount.account_name}</span> <br />
                       <span onClick={() => {deleteBankAccount(bankacount.id)}}>{bankacount.account_number}</span> <br />
                       <span onClick={() => {deleteBankAccount(bankacount.id)}}>{bankacount.bank_name}</span> <br />
                       <span onClick={() => {deleteBankAccount(bankacount.id)}}>{bankacount.bank_branch}</span> <br />

                       <input className="btn-blue" type="submit" value="Edit"></input> 
                        
                    </div>
                )
            })
        ) : (
            <p className="center">You have no Bank Account!</p>
        )
        return (
            <div className="bankaccounts collection" >
                {bankaccountList}
            </div>
        )
}

export default BankAccounts