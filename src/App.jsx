import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailsReservation from "./pages/DetailsReservation";
import Home from "./pages/Home";
import Login from './pages/Login'
import NewReservation from "./pages/NewReservation";
import Reservations from './pages/Reservations'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin" element={<Reservations  />} />
				<Route path="/login" element={<Login />} />
				<Route path="/new" element={<NewReservation />} />
				<Route path="/reservation/:id" element={<DetailsReservation />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App