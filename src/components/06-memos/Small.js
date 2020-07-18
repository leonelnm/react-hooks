import React, { memo } from 'react'

// memo "memoriza un component", si el elemento cambia entonces se renderiza el nuevo compoenent
export const Small = memo(({value}) => {
	return (
		<small>
			{value}
		</small>
	)
})
