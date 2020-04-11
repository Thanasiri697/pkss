import React, {useState} from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Login from './components/login';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  const [session, setSession] = useState({
    isLoggedIn:false,
    currentuser:null,
    errorMessage: null,
  })

 
  return (
    <div className="App">
    {session.isLoggedIn ? (
      <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    ) : ( <Login /> )}
  </div>

  );


}

export default App;


