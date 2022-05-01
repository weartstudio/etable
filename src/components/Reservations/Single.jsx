import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { getToken } from '../../services/token'
import { useNavigate } from 'react-router-dom'
import RefetchAdmin from '../../services/RefetchAdmin'

function Single({item, show, setShow}) {

	const [token] = useState(getToken());
	const navigate = useNavigate();
	const refetch = useContext(RefetchAdmin);

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
				.then((res) => { 
					if(res.ok){
						setShow(false); 
						refetch(); 
					} 
				 });
		}else{
			navigate("/login") 
		}
	};

	return (
		<Modal show={show} onHide={()=>setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>{item.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{item.persons}</p>
				<p>{item.when_date}</p>
				<p>{item.tel}</p>				
				<p>{item.email}</p>				
			</Modal.Body>
			<Modal.Footer>
				<Button variant='danger' onClick={handleDelete}>törlés</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default Single