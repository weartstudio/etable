import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Spinner } from 'react-bootstrap'
import { getToken } from '../services/token'
import { getCustomDate } from '../services/getCustomDate'
import Header from "../components/Header"
import Item from '../components/Reservations/Item'
import Pager from '../components/Reservations/Pager'
import RefetchAdmin from '../services/RefetchAdmin'
import useInterval from '../services/useInterval'

function Reservations() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [token] = useState(getToken());
	const [date, setDate] = useState( getCustomDate(0) );

	const navigate = useNavigate();

	const fetchReservations = () => {
		if(token){ 
			setLoading(true);
			fetch(`https://api.etable.hu/reservations/${token.restaurant_id}/${date}`, { 
					method: 'get', 
					headers: new Headers({
						'token': token.token
					})
				})
				.then((res) => (res.ok ? res.json() : [] ))
				.then((tartalom) => {
					setItems(tartalom);
					setLoading(false);
				});
		}else{
			navigate("/login") 
		}
	}

	useEffect(() => fetchReservations(), [date]);
	useInterval(() => fetchReservations(), 30000); // fél perc


	return (
		<>
			<RefetchAdmin.Provider value={fetchReservations}>
				<Header />
				<Pager date={date} setDate={setDate} />
				<Container className='container-small'>
						<Row className='g-4 justify-content-center'>
							{ loading ?
								<Spinner animation="border" />
								:
								items.length > 0 ?
									items.map( (data) => <Item item={data} key={data.id} />)
									:
									<p className='text-center text-muted col'>
										Erre a napra nincs foglalás az adatbázisban.
									</p>
							}
						</Row>
				</Container>
			</RefetchAdmin.Provider>
		</>
	)
}

export default Reservations