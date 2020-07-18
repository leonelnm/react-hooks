import React, { useState, useCallback, useEffect } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css'

export const CallbackHook = () => {

	const [counter, setCounter] = useState(10);

	// const increment = () => setCounter(counter + 1);

	const increment = useCallback((num = 1) => {
		setCounter(c => c + num)
	}, [setCounter])

	// useCallback: tiene dos casos de uso ->
	// 1. enviar una función al componente hijo, el compoenent hijo deberá usar React.memo
	// 2. cuando se utiliza un useEffect y el efecto tiene como dependencia la función

	useEffect(() => {
		console.log("Callback compoenent generated!");
	}, [increment])

	return (
		<div>
			<h1 className="mb-5">useCallback Hook: {counter}</h1>

			<ShowIncrement increment={increment} />
		</div>
	)
}
