import React from 'react'
import { Box, Typography,styled } from '@mui/material'

const BalanceText=styled(Typography) `
margin-bottom : 20px;
font-size : 25px;
font-family: 'Montserrat', sans-serif;

`

export default function Balance({Transactions}) {
  const Amount=Transactions.map(Transactions => Transactions.Amount);
  const TotalBalance=Amount.reduce((Amount , item)=>(Amount +=item),0).toFixed(2);
  return (
    <Box>
        <BalanceText>Balance : {TotalBalance}$</BalanceText>
    </Box>
  )
}
