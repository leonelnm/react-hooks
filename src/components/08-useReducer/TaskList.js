import React from 'react'
import PropTypes from 'prop-types';
import { TaskListitem } from './TaskListitem'


export const TaskList = ({ tasks, handleToggleComplete, handleDelete }) => {
	return (

		<ul className="list-group list-group-flush">
			{
				tasks.map(
					(task, i) => 
						<TaskListitem 
							key={task.id} 
							task={task} 
							index={i} 
							handleToggleComplete={handleToggleComplete} 
							handleDelete={handleDelete} />)
			}
		</ul>

	)
}

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired,
	handleToggleComplete: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired
}