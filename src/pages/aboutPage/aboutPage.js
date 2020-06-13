import React from 'react'

import Nav from './../../components/organisms/nav'
import Footer from './../../components/organisms/footer'

import './about.scss'

const AboutPage = () => {
	return (
		<div className="aboutPage">
			<Nav />
			<div className="about">
				<h2>O Stronie</h2>
				<div>
					<p>
						Strona z filmami. Umożliwia wyświetlanie wideo oraz dodawanie do stanu nowych filmów
					</p>
					<br />
					<p>
						Strona napisana jest w <b>ReactJs</b>. Wykorzystuje Api. Player to <b>Plyr-react</b>. Układ componentów jest oparty o <b>Atomic design</b>. Kolory w aplikacji są z strony <i>flatuicolors.com</i>. Do stylowania został wykorzystany <b>Scss</b>. 
					</p>
					<br/>
					<p>
						Jest to jeden z pierwszych moich projektów.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default AboutPage
