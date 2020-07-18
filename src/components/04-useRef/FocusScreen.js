import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

	const inputRef = useRef()

	const handleClick = () => {
		inputRef.current.select();
	}

	return (
		<div>
			<h1 className="mb-3">Focus Screen</h1>

			<input
				ref={inputRef}				
				className="form-control"
				placeholder="Insert name"
			/>

			<button className="btn btn-primary mt-3"
				onClick={handleClick}>
				Focus
			</button>


		</div>
	)
}
