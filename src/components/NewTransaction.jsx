import { Box, Button, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Container=styled(Box) `
display: flex;
flex-direction : column;
& > h5 , & >div , & >Button{
    margin-Top : 30px
}
`

export default function NewTransaction({setTransactions}) {
  const addTransaction=()=>
{
    const Transactions={
      id: Math.floor(Math.random * 100),
      text:text,
      //+ because its string we converted into integer for conversion
      Amount:+Amount
    }
    setTransactions(prevState =>[Transactions , ...prevState])
}
const [text , setText]=useState("");
const [Amount , SetAmount] = useState();
  return (
    <Container>
<Typography variant='h5' style={{fontFamily: "'Montserrat', sans-serif"}}>New Transactions</Typography>
<Typography style={{marginTop: "0.5rem", fontSize: "10px"}}>- For Expense and + for Income</Typography>
<TextField label="Enter Expense"onChange={(e)=>setText(e.target.value)}/>
<TextField label="Enter Amount"onChange={(e)=>SetAmount(e.target.value)}/>
<Button variant='contained' onClick={addTransaction} style={{background: "#2E4F4F"}}>Add Transaction</Button>

        </Container>
  )
}
