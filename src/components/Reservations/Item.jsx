import React, { useState } from 'react'
import { Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Single from './Single'

function Item({item}) {
	const [showSingle, setShowSingle] = useState(false);
	return (
		<>
			<Col lg="12">
				<div className="card card-body shadow-sm">
					<h5 className="card-title">
						<Button variant='link' onClick={()=>setShowSingle(true)}>
							{item.name}
						</Button>
						{showSingle ? <Single data={item} show={showSingle} setShow={setShowSingle} /> : null}
					</h5>
					<div className="row">
						<div className="col-auto">{item.persons}</div>
						<div className="col-auto">{item.when_date}</div>
						<div className="col-auto">{item.email}</div>
					</div>
				</div>
			</Col>
			
		</>
	)
}

export default Item