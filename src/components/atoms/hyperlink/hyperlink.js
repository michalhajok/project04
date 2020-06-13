import React from 'react'

import{ Link } from '@reach/router'

const Hyperlink = (props) => {
	return (
		<Link className={props.className} to={props.to}>
			{props.children}
		</Link>
	)
}

export default Hyperlink
