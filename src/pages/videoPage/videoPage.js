import React from 'react'

import {PlyrComponent} from 'plyr-react'

import { useParams } from '@reach/router'

import Nav from './../../components/organisms/nav'
import Footer from './../../components/organisms/footer'

const VideoPage = ({movies}) => {

	const params = useParams()

	const sources = {
		type:'video',
		sources:[
			{
				src: movies[params.id].video_url.replace("https://youtu.be/", ""),
				provider:'youtube'
			}
		]}

	return (
		<div>
			<Nav />
				<PlyrComponent sources={sources} />
			<Footer />
		</div>
	)
}

export default VideoPage
