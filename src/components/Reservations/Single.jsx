import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { getToken } from '../../services/token'
import { useNavigate } from 'react-router-dom'

function Single({data, setShow}) {

	const [token] = useState(getToken());
	const navigate = useNavigate();

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
		<Modal show={true} onHide={()=>setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>{data.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
			<Modal.Footer>
				<Button variant='danger' onClick={handleDelete}>törlés</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default Single