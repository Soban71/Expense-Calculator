import { ListItemText, ListItem, ListItemIcon, styled } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Detail=styled(ListItem)
`
margin-top : 10px;
color : black;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`

export default function TransactionDetail({transaction,  Transactions , setTransactions }) {
  const DeleteItems=(id)=>{
    setTransactions(Transactions.filter(transaction=>transaction.id !== id))
  }
    const color=transaction.Amount > 0 ? 'Green': "Red";
  return (
   
      
      <Detail style={{borderRight:  `6px solid ${color}` }}>
        <ListItemIcon>
        < DeleteIcon style={{cursor: "pointer"}} onClick={()=>DeleteItems(transaction.id)}/>
        </ListItemIcon>

<ListItemText>{transaction.text}</ListItemText>
<ListItemText>{transaction.Amount}$</ListItemText>
            </Detail>

    
  )
}
