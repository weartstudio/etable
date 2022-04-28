import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../services/token'
import { Modal, Row, Stack, Form, Button } from 'react-bootstrap'

function New({ setShow}) {

	const [token] = useState(getToken());
	const [currDate,setCurrDate] = useState();
	const navigate = useNavigate();

	useEffect(()=>{
		var date = new Date();
		var formatedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
		setCurrDate(formatedDate);
	},[]);

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
		<Modal show={true} onHide={()=>setShow(false)}>
			<Form onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Új foglalás</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Stack gap='3'>
						<Form.Control name="name" type='text' placeholder='Név' />
						<Form.Control name="persons" type='number' placeholder='Személyek' />
						<Form.Control name="when_date" type='date' defaultValue={ Date.now() } />
						<Form.Control name="email" type='email' placeholder='Email' />
						<Form.Control name="tel" type='text' placeholder='Telefon' />
					</Stack>					
				</Modal.Body>
				<Modal.Footer>
					<Button className='px-5' type='submit' variant='primary'>Küldés</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default New