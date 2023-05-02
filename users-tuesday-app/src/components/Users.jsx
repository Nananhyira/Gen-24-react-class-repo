import React from "react";
import User from "./User";
import { Container, Row, Col } from "react-bootstrap";

function Users({ data , deleteUser , editUser}) {
	return (
		<Container>
			<h1>see all users</h1>
			<Row>
				{data.map((item, index) => {
					return (
						
							<User key={item.id} editUser={editUser} deleteUser={deleteUser} user={item} />
						
					);
				})}
			</Row>
		</Container>
	);
}

export default Users;
