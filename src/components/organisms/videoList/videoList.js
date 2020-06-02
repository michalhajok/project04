import React from 'react'

import Video from './../../molecules/video'

const VideoList = ({movies}) => {
	return (
		<div>
			{movies.map(movie=>(
				<Video key={"movie"+movie.id} movie={movie} />
			))}
		</div>
	)
}

export default VideoList
