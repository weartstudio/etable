import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/Login'
import NewReservation from "./pages/NewReservation";
import Reservations from './pages/Reservations'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/reservations"  />} />
				<Route path="/reservations" element={<Reservations  />} />
				<Route path="/login" element={<Login />} />
				<Route path="/new-reservation" element={<NewReservation />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App