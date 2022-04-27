import React, {useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { getToken } from '../services/token'
import Header from '../components/Header'

function ReservationSingle() { 
	const [token, setToken] = useState(getToken());
	const [item, setItem] = useState("");
	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		if(token){ 
			fetch("https://api.etable.hu/reservation/" + id, { 
					method: 'get', 
					headers: new Headers({
						'token': token.token
					})
				})
				.then((res) => (res.ok ? res.json() : [] ))
				.then((tartalom) => {
					setItem(tartalom[0])
				});
		}else{
			navigate("/login") 
		}
	}, []);

	const handleDelete = (e) => {
		e.preventDefault();
		if(token){ 
			fetch("https://api.etable.hu/reservation/"+item.id, { 
					method: 'DELETE', 
					headers: new Headers({
						'Content-Type': 'application/json',
						'token': token.token
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
			<Container>
				<Row className='justify-content-center'>
					<Col>
						<h1>{item.name}</h1>
						<Button variant='danger' onClick={handleDelete}>Törlés</Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default ReservationSingle