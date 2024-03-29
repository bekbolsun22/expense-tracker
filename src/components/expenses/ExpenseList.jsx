import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({ expenses = [], onDeleteExpense }) => {
	// const content =
	// 	expenses.length === 0 ? (
	// 		<h1 className='expenses-list__fallback'>No Expenses</h1>
	// 	) : (
	// <ul className='expenses-list'>
	// 	{expenses.map((expense) => {
	// 		return (
	// 			<ExpenseItem
	// 				onDeleteExpense={onDeleteExpense}
	// 				date={expense.date}
	// 				title={expense.title}
	// 				id={expense.id}
	// 				amount={expense.amount}
	// 			/>
	// 		)
	// 	})}
	// </ul>
	// 	)
	// return content

	return (
		<div>
			{expenses.length === 0 && (
				<h1 className='expenses-list__fallback'>No Expenses</h1>
			)}
			{expenses.length > 0 && (
				<ul className='expenses-list'>
					{expenses.map((expense) => {
						return (
							<ExpenseItem
								onDeleteExpense={onDeleteExpense}
								date={expense.date}
								title={expense.title}
								id={expense.id}
								amount={expense.amount}
							/>
						)
					})}
				</ul>
			)}
		</div>
	)
}

export default ExpenseList
