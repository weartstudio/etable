import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../services/token'
import Header from '../components/Header'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function NewReservation() {
	const [token, setToken] = useState(getToken());
	const navigate = useNavigate();

	const handleSubmit = () => {
		if(token){ 
			fetch("https://api.etable.hu/reservations/" + token.restaurant_id, { 
					method: 'post', 
					headers: new Headers({
						'Content-Type': 'application/json'
					}),
					body: JSON.stringify({ 
						// email: name, 
						// password: pass
					})
				})
				.then((res) => (res.ok ? res.json() : [] ))
				.then((tartalom) => {
					navigate("/reservations")
				});
		}else{
			navigate("/login") 
		}
	};


	return (
		<>
			<Header />
			<Container>
				<Row className='justify-content-center'>
					<Col md='8' lg='6'>
						<Form className='vstack gap-4'>
							<Form.Control type='text' placeholder='Név' />
							<Form.Control type='number' placeholder='Személyek' />
							<Form.Control type='date' placeholder='Mikor (dátum)' />
							<Form.Control type='email' placeholder='Email' />
							<Form.Control type='text' placeholder='Telefon' />
							<Button type='submit' variant='primary'>Küldés</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default NewReservation