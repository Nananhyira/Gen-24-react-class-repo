import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function EditUser(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [contacts, setContacts] = useState({
		name: props.data.name,
		email: props.data.email,
		gen: props.data.gen,
	});
	const handleChange = (e) => {
		e.preventDefault();
		setContacts({ ...contacts, [e.target.name]: e.target.value });
		// console.log(contacts);
	};
	const handleEdit = (e) => {
		e.preventDefault();
    let newInfo = {
			name: contacts.name,
			email: contacts.email,
			gen: contacts.gen,
		};
		props.editUser(props.data.id,newInfo );
    handleClose()
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Edit
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
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
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleEdit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EditUser;
