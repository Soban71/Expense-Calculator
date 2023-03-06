import {Box, Typography , styled} from "@mui/material"
import "./App.css"
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransaction from "./components/NewTransaction";
import TransactionHistory from "./components/TransactionHistory";
import { useState } from "react";

const Header=styled(Typography) `
font-family: 'Montserrat', sans-serif;
margin-Bottom: 1rem;
font-size: 32px;
  font-weight: bold;
  letter-spacing: .3rem;
  line-height: 1em;
  color: #ECF2FF;
  background: #0E8388;
  padding: 22px;
`

const Component=styled(Box)
`
display: flex;
background: white;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
margin: auto;
width:880px;
padding:10px;
 & > div{
  width:50%;
  height:75vh;
  padding: 10px;
 }
`

function App() {
  const[Transactions ,setTransactions]=useState([

    {id:1 , text:"Salary", Amount:5000},
    {id:2 , text:"Grocery", Amount:-400},
    {id:3 , text:"Bonus", Amount:500},
    {id:4 , text:"Transportation", Amount:-120},
 
  ])



  return (
    <Box className="App">
  <Header>
    Expense Calculator
</Header>


{/**Parent cOmponent*/}
<Component>


{/*Left Component */}
<Box>
<Balance Transactions={Transactions}></Balance>
<ExpenseCard Transactions={Transactions}></ExpenseCard>
<NewTransaction setTransactions={setTransactions}></NewTransaction>
</Box>


{/*Right Component */}
<Box>
  <TransactionHistory Transactions={Transactions} setTransactions={setTransactions}></TransactionHistory>
</Box>

</Component>
    </Box>
  );
}

export default App;
