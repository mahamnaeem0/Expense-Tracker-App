import React from 'react';
import styles from './App.module.css';
import BalanceInfo from './components/balance/BalanceInfo';
import History from './components/history/history';
import Form from './components/form/form';

function App() {

    return (
       <div className={styles.container}>
           <h1 className={styles.app_title}>Expense Tracker</h1>
           <BalanceInfo/>
           <History/>
           <Form/>
       </div>
    )
}

export default App