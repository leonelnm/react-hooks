import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const Layout = () => {


	const { state: counter, increment } = useCounter(1);

	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const { quote } = Boolean(data) && data[0];		// utilzar !!null : transforma null a boolean, hace lo mismo que Boolean(null)

	const pQuote = useRef();

	const [boxSize, setBoxSize] = useState({})

	/*
	* useLayoutEffect: si necesita mutar el DOM y / o si necesita realizar mediciones.
	* useEffect: si no necesita interactuar con el DOM o sus cambios de DOM no son observables (la mayoría de las veces debe usar esto).
	*/

	useLayoutEffect(() => {
		setBoxSize(pQuote.current.getBoundingClientRect());
	}, [quote])

	return (
		<div className="p-1">
			<h2 className="mb-5">Layout Effect</h2>

			<blockquote className="blockquote text-right">
				<p
					className="mb-0"
					ref={pQuote}>
					{quote}
				</p>
			</blockquote>

			<pre>
				{JSON.stringify(boxSize, null, 3)}
			</pre>

			<button className="mt-2 btn btn-outline-primary"
				onClick={() => increment()}>
				Next quote!
			</button>

		</div>
	)
}
