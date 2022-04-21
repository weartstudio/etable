import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { removeToken } from '../services/token'
import logo from '../assets/logo.png' 

function Header() {

	return (
		<Navbar bg="dark" variant='dark' className='mb-5'>
			<Container>
				<Navbar.Brand href={'/'}><img src={logo} style={{maxHeight: 40}} /></Navbar.Brand>
				<Nav className="ms-auto">
					<Nav.Link className={({ isActive }) => (isActive ? "lactive-class" : "not-active-class")} href={'/reservations'}>Foglalások</Nav.Link>
					<Nav.Link href={'/new-reservation'}>Új foglalás</Nav.Link>
					<Nav.Link href={'/login'} onClick={ () => removeToken() }>
						<i className="bi bi-box-arrow-right"></i>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Header