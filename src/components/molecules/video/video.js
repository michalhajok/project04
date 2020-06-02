import React from 'react'

import HyperLink from './../../atoms/hyperlink'
import Figure from './../../atoms/figure'
import Paragraph from './../../atoms/paragraph'

const Video = ({movie}) => {

	const picture =  movie.video_url.replace("https://youtu.be/", "/")

	return (
		<HyperLink to={"/video/"+movie.id}>
			<Figure src={"http://i3.ytimg.com/vi" + picture +"/maxresdefault.jpg"} />
			<Paragraph>{movie.title}</Paragraph>
		</HyperLink>
	)
}

export default Video
