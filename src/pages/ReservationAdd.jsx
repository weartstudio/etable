import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../services/token'
import Header from '../components/Header'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function ReservationAdd() {
	const [token, setToken] = useState(getToken());
	const [currDate,setCurrDate] = useState();
	const navigate = useNavigate();

	useEffect(()=>{
		var date = new Date();
		var formatedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
		setCurrDate(formatedDate);
	},[])

	const handleSubmit = (e) => {
		e.preventDefault();
		if(token){ 
			fetch("https://api.etable.hu/reservation", { 
					method: 'POST', 
					headers: new Headers({
						'Content-Type': 'application/json',
						'token': token.token
					}),
					body: JSON.stringify({ 
						name: e.target.name.value,
						persons: e.target.persons.value,
						when_date: e.target.when_date.value,
						email: e.target.email.value,
						tel: e.target.tel.value,
						restaurant_id: "0"
					})
				})
				.then((res) => (res.ok ? navigate("/admin") : [] ));
		}else{
			navigate("/login") 
		}
	};


	return (
		<>
			<Header />
			<Container style={{maxWidth: 1024}}>
				<Form onSubmit={handleSubmit}>
					<Row className='justify-content-center mb-4'>
						<Col lg="6">
							<Form.Control name="name" type='text' placeholder='Név' />
						</Col>
						<Col>
							<Form.Control name="persons" type='number' placeholder='Személyek' />
						</Col>
						<Col>
							<Form.Control name="when_date" type='date' defaultValue={ Date.now() } />
						</Col>
					</Row>
					<Row className='justify-content-center mb-4'>
						<Col>
							<Form.Control name="email" type='email' placeholder='Email' />
						</Col>
						<Col>
							<Form.Control name="tel" type='text' placeholder='Telefon' />
						</Col>
					</Row>					
					<Row className='justify-content-center'>
						<Col className='col-auto'>
							<Button className='px-5' type='submit' variant='primary'>Küldés</Button>
						</Col>
					</Row>
				</Form>
			</Container>
		</>
	)
}

export default ReservationAdd