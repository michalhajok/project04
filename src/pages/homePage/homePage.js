import React from 'react'

import VideoList from './../../components/organisms/videoList'
import Nav from './../../components/organisms/nav'
import Footer from './../../components/organisms/footer'

const HomePage = ({movies}) => {
	return (
		<div>
			<Nav />
			<VideoList movies={movies} />
			<Footer />
		</div>
	)
}

export default HomePage
