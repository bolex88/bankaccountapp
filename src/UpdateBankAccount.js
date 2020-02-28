import React from 'react'


    const UpdateBankAccount = ({updatebankaccount, editBankAccount}) => {

        const bankaccountList = updatebankaccount.length ? ( 
            updatebankaccount.map(bankacount => {
                // console.log(bankaccounts)
                return (
                    <div className="collection-it" key={bankacount.id}>
                       <span onClick={() => {editBankAccount(bankacount.id)}}>{bankacount.account_name}</span> <br />
                       <span onClick={() => {editBankAccount(bankacount.id)}}>{bankacount.account_number}</span> <br />
                       <span onClick={() => {editBankAccount(bankacount.id)}}>{bankacount.bank_name}</span> <br />
                       <span onClick={() => {editBankAccount(bankacount.id)}}>{bankacount.bank_branch}</span> <br />
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

export default UpdateBankAccount