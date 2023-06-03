import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {v4 as uuid} from "uuid"
import { addNewUser } from "../reducer/userSlice";
import { useDispatch } from "react-redux";

const UserForm = (props) => {
	const [contacts, setContacts] = useState({
		name: "",
		email: "",
		gen: "",
	});
	const dispatch = useDispatch()
	const handleChange = (e) => {
		e.preventDefault();
		setContacts({ ...contacts, [e.target.name]: e.target.value });
		// console.log(contacts);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//this code is commented out because it  is not an ideal way to solve this problem at this time.
		// setContacts(
		// {
		//   name:contacts.name,
		//   email:contacts.email,
		//   gen:contacts.gen
		// })

		// ideal way is to store the details in an object and pass it  as props to the function.
		let person = {
			id:uuid(),
			name: contacts.name,
			email: contacts.email,
			gen: contacts.gen,
		};
		dispatch(addNewUser(person));
		// props.user(person);
		 console.log(person)
		setContacts({
			name: "",
			email: "",
			gen: "",
		});
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
					required
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
					required
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
					required
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default UserForm;
