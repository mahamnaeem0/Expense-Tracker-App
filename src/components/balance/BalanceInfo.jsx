import React, { useContext } from 'react';
import styles from './BalanceInfo.module.css';
import {ExpenseAndIncome} from '../../context/ExpenseAndIncome';
import Form from '../form/form';
import History from '../history/history';


function BalanceInfo() {

    const {account}=useContext(ExpenseAndIncome);

    return (
        <div className={styles.balanceInfo}>
            <div className={styles.balance}>
                <div className={styles.current}>
                 <h3>Current Balance</h3>
                 <h2>Rs.{account.current_balance}</h2>
                </div>
                <div className={styles.previous}>
                  <h3>Previous Balance</h3>  
                  <h2>Rs.{account.previous_balance}</h2>  
                </div>
            </div>
            <div className={styles.expense_and_income_info}>
                <div className={styles.income}>
                    <h3>INCOME</h3>
                    <h2>Rs.{account.income}</h2>
                </div>
                <div className={styles.expense}>
                    <h3>EXPENSE</h3>
                    <h2>Rs.{account.expense}</h2>
                </div>
            </div>
            
        </div>
    )
}

export default BalanceInfo
export function App() {

    return (
        <div className={styles.container}>
            <h1 className={styles.app_title}>Expense Tracker</h1>
            <BalanceInfo />
            <History />
            <Form />
        </div>
    );
}
