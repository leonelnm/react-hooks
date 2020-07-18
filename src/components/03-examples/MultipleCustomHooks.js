import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHooks = () => {


	const { state: counter, increment } = useCounter(1);

	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const { author, quote } = Boolean(data) && data[0];		// utilzar !!null : transforma null a boolean, hace lo mismo que Boolean(null)

	return (
		<div className="p-1">
			<h2 className="mb-5">Breakind Bad Quotes</h2>
			{
				loading
					?
					<div className="alert alert-info text-center">
						Loading...
					</div>
					:
					<>
						<blockquote className="blockquote text-right">
							<p className="mb-0">{quote}</p>
							<footer className="blockquote-footer">{author}</footer>
						</blockquote>
						<button className="btn btn-outline-primary"
							onClick={() => increment()}>
							Next quote!
						</button>
					</>
			}

		</div>
	)
}
