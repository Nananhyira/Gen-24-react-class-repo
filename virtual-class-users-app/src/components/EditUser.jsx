import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditUser(props) {
	const [users, setUsers] = useState({
		name: props.data.name,
		email: props.data.email,
		gen: props.data.gen,
	});
	// console.log(props);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


// this function handles the all the input values
	const handleChange = (e) => {
		e.preventDefault();
		setUsers({ ...users, [e.target.name]: e.target.value });
		// console.log(users);
	};
// thtis function updates the old info of an existing user
	const handleSubmit = (e) => {
		e.preventDefault();
    let updatedInfo = {
			name: users.name,
			email: users.email,
			gen: users.gen,
		};
		props.editUser(props.data.id, updatedInfo);
    handleClose()
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Edit
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter full name"
								value={users.name}
								onChange={handleChange}
								name="name"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={users.email}
								name="email"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Gen</Form.Label>
							<Form.Control
								type="text"
								placeholder="Gen"
								value={users.gen}
								name="gen"
								onChange={handleChange}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EditUser;
