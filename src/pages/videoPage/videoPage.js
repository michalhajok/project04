import React from 'react'

import { PlyrComponent } from 'plyr-react'

import { useParams } from '@reach/router'

import Nav from './../../components/organisms/nav'
import Footer from './../../components/organisms/footer'

import './videoPage.scss'

const VideoPage = ({movies}) => {

	const params = useParams()

	const sources = {
		type:'video',
		sources:[
			{
				src: movies[params.id].video_url,
				provider:'youtube'
			}
		]}

	return (
		<div className="videoPage">
			<Nav />
				<div className="content">
					<PlyrComponent sources={sources} />
					<h2>{movies[params.id].title}</h2>
				</div>
			<Footer />
		</div>
	)
}

export default VideoPage
