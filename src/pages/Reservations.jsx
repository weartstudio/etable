import React, { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import { getToken } from '../services/token'
import { getCustomDate } from '../services/getCustomDate'
import Header from "../components/Header"
import Item from '../components/Reservations/Item'
import Pager from '../components/Reservations/Pager'

function Reservations() {
	const [items, setItems] = useState([]);
	const [token] = useState(getToken());
	const [date, setDate] = useState( getCustomDate(0) );

	const navigate = useNavigate();
	const refetchAdmin = createContext(1);

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
			<Pager date={date} setDate={setDate} />
			<Container className='container-small'>
					<Row className='g-4 justify-content-center'>
						{ items.length > 0 ?
								items.map( (data) => <Item item={data} key={data.id} />)
							:
								<div className='text-center text-muted col'>
									<p>Erre a napra nincs foglalás.</p>
									<p className='small'>{date}</p>
								</div>
						}
					</Row>
			</Container>
		</>
	)
}

export default Reservations