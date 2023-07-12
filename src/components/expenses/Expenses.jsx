import React from 'react'
import ExpenseList from './ExpenseList'
import './Expenses.css'
import Card from '../UI/card/Card'

const Expenses = ({ expenses = [], onDeleteExpense }) => {
	return (
		<Card className='expenses'>
			<ExpenseList
				onDeleteExpense={onDeleteExpense}
				expenses={expenses}
			/>
		</Card>
	)
}

export default Expenses
