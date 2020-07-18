import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {

	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null
	});

	const isMounted = useRef(true);

	useEffect(() => {
		return () => {
			// el return sólo se lanza cuando el component es desmontado
			isMounted.current = false
		}
	}, [])

	useEffect(() => {

		setState({ data: null, loading: true, error: null })

		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				if (isMounted.current) {
					setState({
						loading: false,
						error: null,
						data: data
					})
				} 
			})

	}, [url])

	return state;

}
