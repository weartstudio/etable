import React, { useState } from 'react'
import { Col, Button, Card } from 'react-bootstrap'
import Single from './Single'
import { Link } from 'react-router-dom';

function Item({item}) {
	const [showSingle, setShowSingle] = useState(false);
	return (
		<>
			<Col lg="12">
				<Card className="shadow-sm">
					<Card.Body>
						<span className='stretched-link' onClick={()=>setShowSingle(true)}>
							{item.name}
						</span>
						{showSingle && <Single item={item} show={showSingle} setShow={setShowSingle} /> }
					</Card.Body>
				</Card>
			</Col>
			
		</>
	)
}

export default Item