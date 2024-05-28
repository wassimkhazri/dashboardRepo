import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import RoomListing from "./components/room/RoomListing"
import Rooms from "./components/room/Rooms"



function App() {
	return (
			<main>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/browse-all-rooms" element={<RoomListing />} />
						<Route path="/view-types" element={<Rooms />} />
					</Routes>
				</Router>
				<Footer />
			</main>
	)
}

export default App