import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from './pages/Login'
import Reservations from './pages/Reservations'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Reservations  />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App