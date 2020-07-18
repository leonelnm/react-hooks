import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/effects.css'

export const RealExampleRef = () => {

	const [show, setShow] = useState(false);

	return (
		<div>
			<h1 className="mb-5">Example useRef</h1>

			<button className="btn btn-info m-3"
				onClick={() => setShow(!show)}>Show/Hide</button>

			{show && <MultipleCustomHooks />}


		</div>
	)
}
