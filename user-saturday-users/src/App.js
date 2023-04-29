import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import UserForm from "./components/UserForm";
import AllUsers from "./components/AllUsers";
import React, { useState } from "react";

function App() {
	const [users, setUsers] = useState([
		{ name: "ama", email: "ama@gmail.com", gen: 24 },
		{ name: "john", email: "john@gmail.com", gen: 24 },
		{ name: "ben", email: "ben@gmail.com", gen: 24 },
	]);
	const addNewUser = (newUser) => {
		// users.push(newUser)
		setUsers([...users, newUser]);
		console.log(users);
	};


	return (
		<Container>
			<Row>
				<Col>
					<UserForm user={addNewUser} />
				</Col>
				<Col>
					<AllUsers />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
