import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../services/token'
import Header from "../components/Header"
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import ReservationItem from '../components/ReservationItem';
import { Button, InputGroup } from 'react-bootstrap';

const today = new Date();

function Reservations() {
	const [items, setItems] = useState([]);
	const [token] = useState(getToken());
	const [date, setDate] = useState( getDate(0) );

	const navigate = useNavigate();

	function getDate(plusDay, td = today){
		const date = today.setDate(today.getDate() + plusDay); 
		const result = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd
		return result;
	}

	useEffect(() => {
		if(token){ 
			fetch(`https://api.etable.hu/reservations/${token.restaurant_id}/${date}`, { 
					method: 'get', 
					headers: new Headers({
						'token': token.token
					})
				})
				.then((res) => (res.ok ? res.json() : [] ))
				.then((tartalom) => {
					setItems(tartalom)
				});
		}else{
			navigate("/login") 
		}
	}, [date]);
	
	return (
		<>
			<Header />
			<Container>
				<Row className='mb-5 justify-content-center'>
					<Col className='col-auto'>
					<InputGroup className="mb-3">
						<Button variant='outline-dark' onClick={()=>setDate(prev => getDate(-1, prev) )}><i class="bi bi-dash-lg"></i></Button>
						<FormControl type='date' value={date}	onChange={(e)=>setDate(e.target.value)} />
						<Button variant='outline-dark' onClick={()=>setDate(prev => getDate(1, prev) )}><i class="bi bi-plus-lg"></i></Button>
					</InputGroup>
					</Col>
				</Row>
				<Row className='g-4'>
					{items.map( (data) => <ReservationItem item={data}  key={data.id} />)}
				</Row>
			</Container>
		</>
	)
}

export default Reservations