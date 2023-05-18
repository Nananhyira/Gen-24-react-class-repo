import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Button variant="dark">
					<Link to="/">Home</Link>
				</Button>

				<Nav className="me-auto">
					<Button variant="dark">
						<Link to="about">About</Link>
					</Button>

					<Button variant="dark">
						<Link to="contact">Contact</Link>
					</Button>
				</Nav>
				<Button variant="dark">
					<Link to="items">Items</Link>
				</Button>
			</Container>
		</Navbar>
	);
};

export default Navbars;
