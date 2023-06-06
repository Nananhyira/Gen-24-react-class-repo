import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { editUser } from "../features/userSlice";
import { useDispatch, connect } from "react-redux";

const EditUser = (props) => {
	const [show, setShow] = useState(false);
	const [name, setName] = useState(props.user.name);
	const [email, setEmail] = useState(props.user.email);
	const [gen, setGen] = useState(props.user.gen);
	console.log(props);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();

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

	const handleChanges = (e) => {
		e.preventDefault();
		let newInfo = { name, email, gen, id:props.user.id};
		// props.editUser(props.user.id,newInfo)

		dispatch(editUser({ id: props.user.id, newInfo }));
		console.log(editUser);
		handleClose();
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
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleChanges}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
const mapDispatch = {
	editUser,
};

export default connect(null, mapDispatch)(EditUser);
