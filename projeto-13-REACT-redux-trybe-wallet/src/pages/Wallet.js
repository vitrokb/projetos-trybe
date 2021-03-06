import React from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </>
    );
  }
}

export default Wallet;
