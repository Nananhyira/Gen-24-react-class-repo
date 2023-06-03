import React, { Component } from "react";
import UserCard from "./UserCard";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

class AllUsers extends Component {
	render() {
		console.log(this.props);
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
const mapState = (state) => {
	return {
		data: state.userReducer.users,
	};
};

export default connect(mapState)(AllUsers);
