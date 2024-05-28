import React from "react"


const Footer = () => {
	let today = new Date()
	return (
		<footer className="bg-dark text-light py-3 footer mt-lg-5">

						<p className="mb-0"> &copy; {today.getFullYear()} Reservation Hotel</p>

		</footer>
	)
}

export default Footer