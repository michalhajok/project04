import React, { useState }  from 'react'

import Nav from './../../components/organisms/nav'
import Form from '../../components/organisms/form'
import Footer from './../../components/organisms/footer'

import './add.scss'

const AddPage = ({ movies, setMovies }) => {

	const [state, setState] = useState({
		id:"",
		title:"",
		description:"",
		video_url:""
	})

	const fields = (e) =>{
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		setMovies([ ...movies,{
			id: movies.length,
			title: state.title,
			description: state.description,
			video_url: state.video_url
		}])
	}

	return (
		<div className="addPage">
			<Nav />
			<div className="add">
				<h2>
					Dodaj film
				</h2>
				<Form state={state} handleSubmit={handleSubmit} fields={fields} submitValue="Dodaj" />
			</div>
			<Footer />
		</div>
	)
}

export default AddPage
