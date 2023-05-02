import React, { Component } from 'react'
import { Button, Card,Col } from 'react-bootstrap'
import EditUser from "./EditUser"

 class User extends Component {
  constructor(props) {
    super(props)
		
  }
	
		
	
  render() {
    return (
			<Col md="4">
				<Card style={{ width: "18rem" }}>
					<Card.Body>
						<Card.Title>Student Details</Card.Title>
						<p>Name:{this.props.user.name} </p>
						<p>Email:{this.props.user.email} </p>
						<p>Gen:{this.props.user.gen} </p>
						<EditUser editUser={this.props.editUser}  user={this.props.user}/>
						<Button
							onClick={() => {
								this.props.deleteUser(this.props.user.id);
							}}
							variant="danger">
							Delete
						</Button>
					</Card.Body>
				</Card>
			</Col>
		);
  }
}

export default User