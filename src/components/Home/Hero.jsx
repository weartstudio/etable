import React from 'react'
import { Button, Col } from 'react-bootstrap'

function Hero() {
	return (
		<div className="p-4 mb-5 text-center">
			<h1 className="display-4 fw-bold">Éttermi asztalfoglalás</h1>
			<Col lg='6' className="mx-auto">
				<p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<Button href='#' variant='primary' size='lg'>Tovább a foglaláshoz</Button>
					<Button href='/login' variant='link' size='lg'>Éttermeknek</Button>
				</div>
			</Col>
		</div>
	)
}

export default Hero