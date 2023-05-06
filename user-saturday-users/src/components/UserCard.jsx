import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import EditUser from "./EditUser";

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
					<EditUser  editUser={this.props.editUser} data={this.props.data}/>
					<Button
						onClick={(e) => this.props.deleteUser(this.props.data.id)}
						variant="danger">
						Delete
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default UserCard;
