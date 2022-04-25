import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { getToken, removeToken } from '../services/token'
import logo from '../assets/logo.png' 

function Header({logout}) {
	const [token] = useState(getToken());

	return (
		<header className='mb-5'>
			<Navbar  bg='dark' variant='dark' expand="lg">
				<Container>
					<Navbar.Brand href={!token ? '/' : '/admin'}><img src={logo} style={{maxHeight: 40}} alt='' /></Navbar.Brand>
					<Navbar.Toggle aria-controls="etable-main-nav" />
					<Navbar.Collapse id="etable-main-nav">
						<Nav className="ms-auto">
							{ !logout ? 
								<>
									<Nav.Link href='/admin'>Foglalások</Nav.Link>
									<Nav.Link href='/new' className="me-auto">Új foglalás</Nav.Link>
									<Nav.Link href='#'>Beállítások</Nav.Link>
									<Nav.Link href='/login' onClick={ () => removeToken() }>
										<i className="bi bi-box-arrow-right"></i>
										<span className='d-inline d-lg-none ms-2'>Kijelentkezés</span>
									</Nav.Link>
								</>
								:
								<>
									<Nav.Link href='/'>Mi az etable?</Nav.Link>
									<Nav.Link href='/login'>
										<i className="bi bi-person"></i>
										<span className='ms-2'>Belépés</span>
									</Nav.Link>
								</>
							}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header