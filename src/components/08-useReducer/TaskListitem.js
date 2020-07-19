import React from 'react'
import PropTypes from 'prop-types';

export const TaskListitem = ({ task, index, handleDelete, handleToggleComplete }) => {
	return (
		<li
			className="list-group-item"
		>
			<p
				className={`${task.done && 'complete'}`}
				onClick={() => handleToggleComplete(task.id)}
			>
				{index + 1}. {task.desc}
			</p>
			<button
				className="btn btn-danger"
				onClick={() => handleDelete(task.id)}>
				Del
				</button>
		</li>
	)
}

TaskListitem.propTypes = {
	index: PropTypes.number.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggleComplete: PropTypes.func.isRequired,
	task: PropTypes.object.isRequired,
}