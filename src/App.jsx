import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from './pages/Login'
import ReservationAdd from "./pages/ReservationAdd";
import Reservations from './pages/Reservations'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Reservations  />} />
					<Route path="/login" element={<Login />} />
					<Route path="/new" element={<ReservationAdd />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App