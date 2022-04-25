import React from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Hero from '../components/Home/Hero'

function Home() {
	return (
		<>
			<Header logout />
			<Container>
				<Hero />
			</Container>
		</>
	)
}

export default Home