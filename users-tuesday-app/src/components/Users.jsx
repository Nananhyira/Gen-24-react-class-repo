import React from "react";
import User from "./User";
import { Container, Row, Col } from "react-bootstrap";

function Users({ data }) {
	return (
		<Container>
			<h1>see all users</h1>
			<Row>
				{data.map((item, index) => {
					return (
						
							<User user={item} />
						
					);
				})}
			</Row>
		</Container>
	);
}

export default Users;
