import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UserForm = (props) => {
	const [contacts, setContacts] = useState({
		name: "",
		email: "",
		gen: "",
	});
	const handleChange = (e) => {
		e.preventDefault();
		setContacts({ ...contacts, [e.target.name]: e.target.value });
		console.log(contacts);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setContacts(
		{
		  name:contacts.name,
		  email:contacts.email,
		  gen:contacts.gen
		})

		props.user({
			name: contacts.name,
			email: contacts.email,
			gen: contacts.gen,
		});
		//  console.log(details)
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Full Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter full name"
					onChange={handleChange}
					name="name"
					value={contacts.name}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					name="email"
					onChange={handleChange}
					value={contacts.email}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Gen</Form.Label>
				<Form.Control
					type="text"
					placeholder="gen"
					name="gen"
					onChange={handleChange}
					value={contacts.gen}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default UserForm;
