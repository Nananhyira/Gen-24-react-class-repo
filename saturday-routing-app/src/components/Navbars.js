import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Button variant="light">
					<Link to="/">Home</Link>
				</Button>

				<Nav className="me-auto">
					<Button variant="light">
						<Link to="/success">SuccesStory</Link>
					</Button>
					<Button variant="light">
						<Link to="/courses">Courses</Link>
					</Button>
					<Button variant="light">
						<Link to="/careers">Careers</Link>
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navbars;
