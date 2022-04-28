import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { getToken } from '../../services/token'

function Single({data, show, setShow}) {

	const [token] = useState(getToken());

	const handleClose = () => setShow(!show);

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
		<Modal show={show} onHide={handleClose}>
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