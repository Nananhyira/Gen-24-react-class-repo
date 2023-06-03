import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import UserForm from "./components/UserForm";
import AllUsers from "./components/AllUsers";
import React, { useState } from "react";
import {v4 as uuid}from "uuid"

function App() {
	// const [users, setUsers] = useState([
	// 	{ name: "ama", email: "ama@gmail.com", gen: 24, id: uuid() },
	// 	{ name: "john", email: "john@gmail.com", gen: 24, id: uuid() },
	// 	{ name: "ben", email: "ben@gmail.com", gen: 24, id: uuid() },
	// ]);
// 	const addNewUser = (newUser) => {
// 		// users.push(newUser)
// 		setUsers([...users, newUser]);
// 		console.log(users);
// 	};
// 	const removeUser = (userId) => {
// 		setUsers(users.filter((user)=>userId!==user.id))		
// }
// const editUser = (userId, update) => {
// 	 setUsers( users.map((item, index)=>{
// 		if(userId===item.id){
// 			return update
// 		}
// 		return item

// 	 }))

// }

	return (
		<Container>
			<Row>
				<Col md="4">
					<UserForm 
					// user={addNewUser}
					 />
				</Col>
				<Col >
					<AllUsers 
					// editUser={editUser} 
					//  deleteUser={removeUser} 
					//  data={users} 
					 />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
