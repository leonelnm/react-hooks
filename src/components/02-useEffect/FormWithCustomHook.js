import React, { useEffect } from 'react'

import './effects.css'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

	const [formState, handleInputChange] = useForm({
		name: '',
		email: '',
		password: ''
	})

	const { name, email, password } = formState;

	useEffect(() => {
		console.log('cambio en el email!');
	}, [email])

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formState);
	}

	return (
		<>
			<h1>Hook: UseEffect</h1>
			<p><b>Función: </b>Ejecutar efectos secundarios cuando algo suceda en un componente; está observando los cambios</p>

			<form onSubmit={handleSubmit}>
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

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						id="passwordId"
						name="password"
						value={password}
						onChange={handleInputChange} />
				</div>

				<button type="submit" className="btn btn-primary">
					Guardar
				</button>

			</form>

		</>
	)
}
