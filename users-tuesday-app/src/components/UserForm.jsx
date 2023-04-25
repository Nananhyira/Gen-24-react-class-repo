import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function UserForm(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");

	const handleNameChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};
	const handleEmailChange = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const handleGenChange = (e) => {
		e.preventDefault();
		setGen(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let studentsDetails = {
			name,
			email,
			gen,
		};
		props.newUser(studentsDetails);
		setEmail("");
		setGen("");
		setName("");
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder=" full name"
							value={name}
							onChange={handleNameChange}
							required
						/>
					</Form.Group>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Gen</Form.Label>
					<Form.Control
						type="text"
						placeholder="gen"
						value={gen}
						onChange={handleGenChange}
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default UserForm;
