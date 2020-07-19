import React from 'react'
import { useForm } from '../../hooks/useForm';

export const FormAddTask = ({ handleAddTask }) => {

	const [{ description }, handleInputChange, reset] = useForm({
		description: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		const newTask = {
			id: new Date().getTime(),
			desc: description,
			done: false
		};

		handleAddTask(newTask);
		reset();
	}

	return (
		<div>
			<h4 className="title mb-4">Add TASK</h4>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="description"
					placeholder="Insert new task"
					autoComplete="off"
					className="form-control"
					value={description}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="btn btn-outline-success btn-block mt-1">
					Add
				</button>
			</form>
		</div>
	)
}
