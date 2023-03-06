import React from 'react'
import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import TransactionDetail from './TransactionDetail'
export default function TransactionHistory({Transactions,setTransactions}) {
  return (
   <Box>
    <Typography variant='h5' style={{fontFamily: "'Montserrat', sans-serif"}}>Transaction History</Typography>
    <Divider/>
    <List>
    {
        Transactions.map(transaction =>(
            
      <TransactionDetail  transaction={transaction} Transactions={Transactions} setTransactions={setTransactions}/>
        ))
    }
    </List>
   </Box>
  )
}
