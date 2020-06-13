import React from 'react'

import HyperLink from './../../atoms/hyperlink'
import Figure from './../../atoms/figure'
import Paragraph from './../../atoms/paragraph'

const Video = ({movie}) => {

	const picture =  movie.video_url.replace("https://www.youtube.com/watch?v=", "/")

	return (
		<HyperLink to={"/project04/video/"+movie.id} className="video">
			<Figure src={"http://i3.ytimg.com/vi" + picture +"/maxresdefault.jpg"} />
			<Paragraph>{movie.title}</Paragraph>
		</HyperLink>
	)
}

export default Video
