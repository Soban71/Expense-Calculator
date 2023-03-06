import React from 'react'
import { Box, Card, CardContent,  Typography ,styled } from '@mui/material'

const Container=styled(Box) 
`
display: flex;
font-family: 'Montserrat', sans-serif;
& > div{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    flex:1;
    padding : 10px;
    font-family: 'Montserrat', sans-serif;
}
`
const FontMaker=styled(Typography)
`
font-family: 'Itim', cursive;
font-size: 16px;
`

export default function ExpenseCard({Transactions}) {
    const Amount=Transactions.map(Transactions => Transactions.Amount);
    const Income=Amount.filter(item => item > 0).reduce((Amount , item)=>(Amount +=item),0).toFixed(2);
    const Expense=Amount.filter(item => item < 0).reduce((Amount , item)=>(Amount +=item),0).toFixed(2);
  return (
    <Container>
<Card>
    <CardContent >
        <FontMaker >Income </FontMaker>
        <Typography style={{color: "green",fontFamily: "'Montserrat', sans-serif"}}>{Income}$</Typography>
    </CardContent>
</Card>


<Card>
    <CardContent  >
        <FontMaker>Expense </FontMaker>
        <FontMaker style={{color: "red"}}>{Expense}$</FontMaker>
    </CardContent>
</Card>

</Container>
    
  )
}
