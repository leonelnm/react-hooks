import React, { useReducer, useEffect } from 'react'

import { taskReducer } from './taskReducer';
import { TaskList } from './TaskList';
import { FormAddTask } from './FormAddTask';

import './todoApp.css'

const init = () => {
	return JSON.parse(localStorage.getItem('tasks')) || [];
};

export const TodoApp = () => {

	const [tasks, dispatch] = useReducer(taskReducer, [], init);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const handleDelete = (taskId) => {

		const action = {
			type: 'DELETE',
			payload: taskId
		}

		dispatch(action);
	}

	const handleToggleComplete = (taskId) => {
		dispatch({
			type: "COMPLETE",
			payload: taskId
		});
	}

	const handleAddTask = (task) => {

		dispatch({
			type: 'ADD',
			payload: task
		});
		
	}

	return (
		<div>
			<h1 className="mb-5 title">ToDoApp <span className="badge badge-info">{tasks.length}</span></h1>
			<div className="grid">
				<TaskList tasks={tasks} handleToggleComplete={handleToggleComplete} handleDelete={handleDelete} />
				<FormAddTask handleAddTask={handleAddTask}/>
			</div>

		</div>
	)
}
