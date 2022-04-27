import React, {useEffect, useState} from 'react'
import { Container, Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap'
import { getCustomDate } from '../../services/getCustomDate';

const today = new Date();

function Pager({date,setDate}) {

	useEffect(()=>setDate( getCustomDate(0) ),[])

	return (
		<div className="bg-light mb-5">
			<Container>
				<Row className='py-3 align-items-center justify-content-between'>

					<Col className='col-auto'>
						<InputGroup>
							<Button variant='secondary' onClick={()=>setDate(prev => getCustomDate(-1, prev) )}><i className="bi bi-dash-lg"></i></Button>
							<FormControl type='date' value={date}	onChange={(e)=>setDate(e.target.value)} />
							<Button variant='secondary' onClick={()=>setDate(prev => getCustomDate(1, prev) )}><i className="bi bi-plus-lg"></i></Button>
						</InputGroup>
					</Col>

					<Col className='col-auto'>
						<Button href='/new'>Új foglalás</Button>
					</Col>

				</Row>
			</Container>
		</div>
	)
}

export default Pager