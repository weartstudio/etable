import React, {useState} from 'react'
import { setToken } from '../services/token'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Container, Form, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';

function Login() {
	const navigate = useNavigate();

	const [name,setName] = useState("");
	const [pass,setPass] = useState("");
	const [badPassWord,setBadPassWord] = useState(false);

	function handleSubmit(e){
		e.preventDefault();

		fetch("https://api.etable.hu/users/login", { 
			method: 'POST', 
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({ email: name, password: pass})
		})
			.then((res) => (res.ok ? res.json() : [] ))
			.then((tartalom) => {
				if (tartalom){
					setToken(tartalom)
					navigate("/admin")
				} else {
					setBadPassWord(true) 
				}
			});
	}

	return (
		<>
			<Header logout />
			<Container className='my-5' style={{maxWidth: 1024}}>
				<Row className='align-items-center g-5'>
					<Col lg='4'>
						<Form onSubmit={handleSubmit} className="bg-light p-4 rounded border">
							<h2 className='h5 mb-4'>Belépés éttermek</h2>
							{badPassWord ? <Alert dismissible variant='danger' onClose={() => setBadPassWord(false)}>Hibás email cím vagy jelszó!</Alert> : '' }
							<input onChange={(e)=>setName(e.target.value)} value={name} className='form-control mb-3' placeholder='email cím' type="text"  />
							<input onChange={(e)=>setPass(e.target.value)} value={pass} className='form-control mb-3' placeholder='jelszó' type="password"/>
							<input className='btn btn-primary px-4 mx-auto' type="submit" value="Belépés" />
						</Form>
					</Col>
					<Col>
						<h1 className="h4 mb-4">Nincs még fiókod?</h1> 
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ultricies lorem. Phasellus efficitur diam at odio porta pharetra. Donec pharetra sagittis diam a lobortis.</p>
						<Link to='/etable-ettermeknek'>Tovább olvasom...</Link>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Login