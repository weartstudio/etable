import React from 'react'
import Text from '../components/low-level/Text';


export default function FoglalasCard( { book } ) {


	return (
		<div className='col'>
			<div className='card shadow-sm bg-white'>
				<div className='card-header d-flex align-items-center justify-content-between'>
					<a href={`/${book._id}`}>{book.name}</a>
					<Text text={book.time} tag="badge bg-primary" />
				</div>
				<div className='card-body d-flex small text-muted'>
					<Text text={book.people} icon="bi-people" tag="me-3"/>
					<Text text={book.tel} icon="bi-telephone" tag="me-3"/>
					<Text text={book.email} icon="bi-envelope" />					
				</div>
			</div>
		</div>
	)
}
