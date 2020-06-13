import React from 'react'

import Hyperlink from './../../atoms/hyperlink'

import './nav.scss'

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Hyperlink to="/project04/">Home</Hyperlink>
				</li>
				<li>
					<Hyperlink to="/project04/about">About</Hyperlink>
				</li>
				<li>
					<Hyperlink to="/project04/add">Add</Hyperlink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
