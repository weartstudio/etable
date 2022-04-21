import React from 'react'
import { Col } from 'react-bootstrap'

function ReservationItem({item}) {
	return (
		<Col lg="6">
			<div className="card card-body shadow">
				<h5 className="card-title">
					{item.name}
				</h5>
				<div className="row">
					<div className="col-auto">{item.persons}</div>
					<div className="col-auto">{item.when_date}</div>
					<div className="col-auto">{item.email}</div>
				</div>
			</div>
		</Col>
	)
}

export default ReservationItem