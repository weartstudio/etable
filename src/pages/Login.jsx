import React, {useState} from 'react'
import { setToken } from '../services/token'
import { useNavigate } from 'react-router-dom'
import logoAlt from '../assets/logoAlt.png' 
import { Alert } from 'react-bootstrap';


function Login() {
	const navigate = useNavigate();

	const [name,setName] = useState("");
	const [pass,setPass] = useState("");
	const [badPW,setBadPW] = useState(false);

	function handleSubmit(e){
		e.preventDefault();
		setBadPW(false)

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
					navigate("/reservations")
				} else {
					setBadPW(true) 
				}
			});
	}

	return (
		<div className="container my-5">
			<div className="text-center mb-4">
				<img src={logoAlt} className="mx-auto" style={{maxHeight: 60}} alt='' />
			</div> 
			<form  onSubmit={handleSubmit} className='mx-auto card card-body shadow gap-3' style={{maxWidth: 500}}>
				{badPW ? <Alert dismissible variant='danger' onClose={() => setBadPW(false)}>Hibás email cím vagy jelszó!</Alert> : '' }
				<input onChange={(e)=>setName(e.target.value)} value={name} className='form-control' placeholder='email cím' type="text"  />
				<input onChange={(e)=>setPass(e.target.value)} value={pass} className='form-control' placeholder='jelszó' type="password"/>
				<input className='btn btn-primary px-4 mx-auto' type="submit" value="Belépés" />
			</form>
		</div>
	)
}

export default Login