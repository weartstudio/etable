import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../services/token'
import Header from "../components/Header"
import { Container, Row } from 'react-bootstrap';
import ReservationItem from '../components/ReservationItem';


function Reservations() {
	const [items, setItems] = useState([]);
	const [token, setToken] = useState(getToken());
	const [datum, setDatum] = useState( Date.now );

	const navigate = useNavigate();
	
	useEffect(() => {
		if(token){ 
			fetch("https://api.etable.hu/reservations/" + token.restaurant_id, { 
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
	}, [datum]);
	
	return (
		<>
			<Header />
			<Container>
				<Row className='g-4'>
					{items.map( (data) => <ReservationItem item={data}  key={data.id} />)}
				</Row>
			</Container>
		</>
	)
}

export default Reservations