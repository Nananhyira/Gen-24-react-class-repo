import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Services from "../pages/Services";
import { Link } from "react-router-dom";

const Navbars = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				
					<Link to="/">Home</Link>
				  <Nav className="me-auto">
					<Link to="/contact">Contact</Link>
					<Link to="/about">About</Link>
					<Link to="/service">Services</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navbars;
