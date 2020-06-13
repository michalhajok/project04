import React from 'react'

import Video from './../../molecules/video'

import './videoList.scss'

const VideoList = ({movies, title}) => {
	return (
		<div className="videoList">
			{
			movies.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase())).map(movief=>(
				<Video key={"movie"+movief.id} movie={movief} />
			))}
		</div>
	)
}

export default VideoList
