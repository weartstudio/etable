import React from 'react'
import Link from 'next/link';
import Text from '../components/low-level/Text';


export default function FoglalasCard( { book } ) {


	return (
		<div className='col'>
			<div className='card'>
				<div className='card-header'>
					<Link href={`/book/${book._id}`}>
						<a className='stretched-link'>{book.name}</a>
					</Link>
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
