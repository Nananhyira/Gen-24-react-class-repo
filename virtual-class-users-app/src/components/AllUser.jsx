import React, { Component } from "react";
import SingleUser from "./SingleUser";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

class AllUser extends Component {
	render() {
		return (
			<>
				<h1>This Components displays all the users in our app </h1>

				<Row>
					{this.props.users.map((item, index) => {
						console.log(item);
						return (
							<Col key={item.id} md="4">
								<SingleUser
									// editUser={this.props.editUser}
									// deleteUser={this.props.deleteUser}
									details={item}
								/>
							</Col>
						);
					})}
					<h1>{this.props.count}</h1>
				</Row>
			</>
		);
	}
}

//function to read state from the redux store
const mapState = (state) => {
	return {
		//reading from the users store in redux
		users: state.userReducer.users,
		//
		//reading from the count state in redux store
		//count:state.userReducer.count
	};
};
export default connect(mapState)(AllUser);
