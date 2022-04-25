import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { removeToken } from '../services/token'
import logo from '../assets/logo.png' 

function Header() {

	return (
		<Navbar bg="dark" variant='dark' className='mb-5'  expand="lg">
			<Container>
				<Navbar.Brand href={'/'}><img src={logo} style={{maxHeight: 40}} alt='' /></Navbar.Brand>
				<Navbar.Toggle aria-controls="etable-main-nav" />
				<Navbar.Collapse id="etable-main-nav">
					<Nav className="ms-auto">
						<Nav.Link href={'/reservations'}>Foglalások</Nav.Link>
						<Nav.Link href={'/new-reservation'}>Új foglalás</Nav.Link>
						<Nav.Link href={'/login'} onClick={ () => removeToken() }>
							<i className="bi bi-box-arrow-right"></i>
							<span className='d-inline d-lg-none ms-2'>Kijelentkezés</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header