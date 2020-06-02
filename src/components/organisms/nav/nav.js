import React from 'react'

import Hyperlink from './../../atoms/hyperlink'

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Hyperlink to="/">Home</Hyperlink>
				</li>
				<li>
					<Hyperlink to="/about">About</Hyperlink>
				</li>
				<li>
					<Hyperlink to="/add">Add</Hyperlink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
