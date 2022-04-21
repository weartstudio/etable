import React from 'react'
import { setToken } from '../services/token'
import { useNavigate } from 'react-router-dom'
import logoAlt from '../assets/logoAlt.png' 


function Login() {
	const navigate = useNavigate();

	const [name,setName] = React.useState("");
	const [pass,setPass] = React.useState("");

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
					navigate("/reservations")
				}
			});
	}

	return (
		<div className="container my-5">
			<div className="text-center mb-4">
				<img src={logoAlt} className="mx-auto" style={{maxHeight: 60}} />
			</div> 
			<form  onSubmit={handleSubmit} className='mx-auto card card-body shadow gap-3' style={{maxWidth: 500}}>
				<input onChange={(e)=>setName(e.target.value)} value={name} className='form-control' placeholder='név' type="text"  />
				<input onChange={(e)=>setPass(e.target.value)} value={pass} className='form-control' placeholder='jelszó' type="password"/>
				<input className='btn btn-primary px-4 mx-auto' type="submit" value="Belépés" />
			</form>
		</div>
	)
}

export default Login