import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import EditUser from "./EditUser";
import { connect } from "react-redux";
import { deleteUser } from "../reducer/userSlice";

class UserCard extends Component {
	render() {
		return (
			<Card>
				<Card.Body>
					<Card.Title>User Details</Card.Title>
					<Card.Text>
						<p>Name:{this.props.data.name}</p>
						<p>Email: {this.props.data.email}</p>
						<p>Gen:{this.props.data.gen}</p>
					</Card.Text>
					<EditUser editUser={this.props.editUser} data={this.props.data} />
					<Button
						onClick={(e) =>
							// this.props.deleteUser(this.props.data.id)
							this.props.delete(this.props.data.id)
						}
						variant="danger">
						Delete
					</Button>
				</Card.Body>
			</Card>
		);
	}
}
const mapDispatchToProps = {
	delete: deleteUser,
};

export default connect(null, mapDispatchToProps)(UserCard);
