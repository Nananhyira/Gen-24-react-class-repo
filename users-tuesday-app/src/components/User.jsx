import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

 class User extends Component {
  constructor(props) {
    super(props)
   
  }
  render() {
    return (
			<div>
				<Card style={{ width: "18rem" }}>
					<Card.Body>
						<Card.Title>Student Details</Card.Title>
						<p>Name:{this.props.user.name} </p>
						<p>Email:{this.props.user.email}</p>
						<p>Gen:{this.props.user.gen} </p>
						<Button href="#">Edit</Button>
						<Button href="#" variant='danger'>Delete</Button>
					</Card.Body>
				</Card>
			</div>
		);
  }
}

export default User