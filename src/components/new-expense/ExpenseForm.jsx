import React, { useRef, useState } from 'react'
import FormInput from '../UI/input/FormInput'
import Button from '../UI/button/Button'
import './ExpenseForm.css'

const ExpenseForm = ({ onCloseForm, onAddNewExpense }) => {
	// const [title, setTitle] = useState('')
	// const [amount, setAmount] = useState('')
	// const [date, setDate] = useState('')

	// const isFormValid =
	// 	title.trim().length !== 0 &&
	// 	amount.trim().length !== 0 &&
	// 	date.trim().length !== 0

	// const titleChangeHandler = (e) => {
	// 	setTitle(e.target.value)
	// }

	// const amountChangeHandler = (e) => {
	// 	setAmount(e.target.value)
	// }

	// const dateChangeHandler = (e) => {
	// 	setDate(e.target.value)
	// }

	const titleRef = useRef()

	const submitHandler = (e) => {
		e.preventDefault()
		// if (isFormValid) {
		// 	const expense = {
		// 		date: new Date(date),
		// 		title,
		// 		amount: Number(amount),
		// 		id: Date.now().toString(),
		// 	}
		// 	onAddNewExpense(expense)

		// 	setTitle('')
		// 	setAmount('')
		// 	setDate('')
		// 	// state batching => пакетирование setState
		// } else {
		// 	alert('Заполните все поля!')
		// }

		titleRef.current.value = ''
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<input
					label={'Заголовок'}
					type='text'
					// onChange={titleChangeHandler}
					// value={title}
					ref={titleRef}
				/>
				<FormInput
					label={'Количество'}
					inputType='number'
					// value={amount}
					// onChange={amountChangeHandler}
				/>
				<FormInput
					label={'Датировать'}
					inputType='date'
					// onChange={dateChangeHandler}
					// value={date}
				/>
			</div>
			<div className='new-expense__actions'>
				<Button type='button' onClick={onCloseForm}>
					Отмена
				</Button>
				<Button type='submit'>Добавить расходы</Button>
			</div>
		</form>
	)
}

export default ExpenseForm
