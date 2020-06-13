import React from 'react'

const Form = ({ handleSubmit, state, fields, submitValue}) => {
	return (
		<form onSubmit={(e)=>handleSubmit(e)}>
			<table>
				<tbody>
					<tr>
						<td>
							<label htmlFor="title">
								Tytuł: 
							</label>
						</td>
						<td>
							<input required={true} id="title" name="title" value={state.title} onChange={fields} type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="description">
								Opis: 
							</label>
						</td>
						<td>
							<input required={true} id="description" name="description" value={state.description} onChange={fields} type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="url">
								Link do filmu: 
							</label>
						</td>
						<td>
							<input required={true} id="url" name="video_url" value={state.video_url} onChange={fields} type="text"/>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
								<input className="btn-submit" type="submit" value={submitValue} />
						</td>
					</tr>
				</tbody>
			</table>								
		</form>
	)
}

export default Form
