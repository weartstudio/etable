import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../services/token'
import { Modal, Row, Stack, Form, Button } from 'react-bootstrap'
import RefetchAdmin from '../../services/RefetchAdmin'

function New({show, setShow}) {

	const [token] = useState(getToken());
	const [currDate,setCurrDate] = useState();
	const navigate = useNavigate();
	const refetch = useContext(RefetchAdmin);

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
						restaurant_id: token.restaurant_id
					})
				})
				.then((res) => {
					if(res.ok){
						setShow(false); 
						refetch(); 
				 }}
				);
		}else{
			navigate("/login") 
		}
	};


	return (
		<Modal show={show} onHide={()=>setShow(false)}>
			<Form onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Új foglalás</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Stack gap='3'>
						<Form.Control name="name" type='text' placeholder='Név*' required/>
						<Form.Control name="persons" type='number' placeholder='Személyek*' required/>
						<Form.Control name="when_date" type='date' defaultValue={ new Date().toISOString().split('T')[0] } required/>
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