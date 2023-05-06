import React, { Component } from "react";
import UserCard from "./UserCard";
import { Row, Col } from "react-bootstrap";

class AllUsers extends Component {
	render() {
		return (
			<Row>
				{this.props.data.map((item, index) => {
					return (
						<Col key={item.id} md="4">
							<UserCard
								editUser={this.props.editUser}
								deleteUser={this.props.deleteUser}
								data={item}
							/>
						</Col>
					);
				})}
			</Row>
		);
	}
}

export default AllUsers;
