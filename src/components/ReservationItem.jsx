import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ReservationItem({item}) {
	return (
		<Col lg="6">
			<div className="card card-body shadow">
				<h5 className="card-title">
					<Link to={`/reservation/${item.id}`}>
						{item.name}
					</Link>
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