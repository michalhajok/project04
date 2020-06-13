import React, { useState } from 'react'

import VideoList from './../../components/organisms/videoList'
import Nav from './../../components/organisms/nav'
import Footer from './../../components/organisms/footer'

import './homePage.scss'

const HomePage = ({movies}) => {

	const [title, setTitle] = useState("")

	return (
		<div className="home">
			<Nav />
			<form>
				<label>
					<input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
				</label>
			</form>
			<VideoList movies={movies} title={title} />
			<Footer />
		</div>
	)
}

export default HomePage
