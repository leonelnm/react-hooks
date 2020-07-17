import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

	const{state: counter, increment, decrement, reset} = useCounter(100);

	return (
		<>
			<h1>Counter with Hook: {counter}</h1>
			<button 
				className="btn btn-outline-primary"
				onClick={() => increment(2)}>+2</button>
			<button 
				className="ml-2 btn btn-outline-warning"
				onClick={() => decrement(29)}>-29</button>
			<button 
				className="ml-2 btn btn-outline-danger"
				onClick={reset}>Reset</button>
		</>
	)
}
