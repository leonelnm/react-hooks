import React, { useEffect, useState } from 'react'

import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

	const [formState, setFormState] = useState({
		name: '',
		email: ''
	})

	const { name, email } = formState;

	useEffect(() => {
		// console.log('Hey!!!');
	}, [])

	useEffect(() => {
		// console.log('formState changed!!!');
	}, [formState])

	useEffect(() => {
		// console.log('email changed!!!');
	}, [email])

	const handleInputChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value
		})
	}

	return (
		<>
			<h1>Hook: UseEffect</h1>
			<p><b>Función: </b>Ejecutar efectos secundarios cuando algo suceda en un componente; está observando los cambios</p>


			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="nameId"
					className="form-control"
					name="name"
					autoComplete="off"
					value={name}
					onChange={handleInputChange} />
			</div>
			<div className="form-group">
				<label htmlFor="email">Email address</label>
				<input
					type="text"
					className="form-control"
					id="emailId"
					name="email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange} />
			</div>

			{ name==='123' && <Message /> }

		</>
	)
}
