import React from "react";
import User from "./User";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux'

function Users({ data , deleteUser , editUser}) {
	const {users}= useSelector((state)=> state.users)
	return (
		<Container>
			<h1>see all users</h1>
			<Row>
				{users.map((item, index) => {
					return (
						
							<User key={item.id} editUser={editUser} deleteUser={deleteUser} user={item} />
						
					);
				})}
			</Row>
		</Container>
	);
}

export default Users;
