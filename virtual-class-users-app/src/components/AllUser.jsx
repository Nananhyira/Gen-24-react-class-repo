import React, { Component } from "react";
import SingleUser from "./SingleUser";
import { Row, Col } from "react-bootstrap";

class AllUser extends Component {
	render() {
		return (
			<>
				<h1>This Components displays all the users in our app </h1>

				<Row>
					{this.props.data.map((item, index) => {
						return (
							<Col key={item.id} md="4">
								<SingleUser
									editUser={this.props.editUser}
									deleteUser={this.props.deleteUser}
									details={item}
								/>
							</Col>
						);
					})}
				</Row>
			</>
		);
	}
}

export default AllUser;
