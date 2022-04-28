import React, { useState } from 'react'
import { Col, Button } from 'react-bootstrap'
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
						{showSingle ? <Single item={item} setShow={setShowSingle} /> : null}
					</h5>
				</div>
			</Col>
			
		</>
	)
}

export default Item