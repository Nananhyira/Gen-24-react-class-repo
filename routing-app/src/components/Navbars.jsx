import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Services from "../pages/Services";
import { Link } from "react-router-dom";

const Navbars = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Button style={{padding:"30px !important" }} variant="">
					<Link to="/">Home</Link>
				</Button>

				<Nav className="me-auto">
					<Button variant="">
						<Link to="/contact">Contact</Link>
					</Button>
					
					<Button variant="">
						<Link to="/about">About</Link>
					</Button>
					<Button variant="">
						<Link to="/service">Services</Link>
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navbars;
