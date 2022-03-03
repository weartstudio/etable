import React from 'react'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { Col, Card, Stack, Badge, Button } from 'react-bootstrap';
import Text from '../components/low-level/Text';


export default function FoglalasCard( { book } ) {
	const router = useRouter();

	const deleteThis = async (id) => {
    try {
        const deleted = await fetch(`${process.env.SITE_URI}/api/books/${id}`, {
            method: "Delete"
        });
        router.push("/");
    } catch (error) {
        console.log(error)
    }
  }

	return (
		<Col>
			<Card className='shadow-sm bg-white'>
				<Card.Header>
					<Stack direction="horizontal" className='justify-content-between'>
						<span>{book.name}</span>
						<Badge>{book.time}</Badge>
					</Stack>				
				</Card.Header>
				<Card.Body>
					<Stack gap={4} direction='horizontal' className='small text-muted'>
						<Text text={book.people} icon="bi-people" />
						<Text text={book.tel} icon="bi-telephone" />
						<Text text={book.email} icon="bi-envelope" />
						<Button 
							size='sm' 
							variant='outline-danger' 
							className='ms-auto'
							onClick={() => deleteThis(book._id)}
						>
							<i className='bi bi-trash'></i>
						</Button>
					</Stack>
				</Card.Body>
			</Card>
		</Col>
	)
}
