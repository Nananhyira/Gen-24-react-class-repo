import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'





function App() {
  // const [studentData, setStudentData] = useState([
	// 	{ name: "robert", email: "rob@example.com", gen: 24, id: uuid() },
	// 	{ name: "Al", email: "ali@example.com", gen: 24, id: uuid() },
	// 	{ name: "Seth", email: "seth@example.com", gen: 24, id: uuid() },
	// ]);
//this function adds new item to the studentData array
// const addNewUser = (newUserData) =>{
//   setStudentData([...studentData, newUserData])
  // studentData.push(newUserData)
// }
// addNewUser({name:"gideon", email:"gideon@gmail.com", gen:23})

// const handleDelete=(userId)=>{
//   const paidStudent= studentData.filter((student)=>{
//     if(userId!== student.id)
//     return student
//   })
//   setStudentData(paidStudent);
// }

// const saveChanges = (id, update) => {
//   setStudentData(studentData.map((item, index)=>{
//     if(item.id===id){
//       return update
//     }
//     return item
//   }))

// }


// console.log(studentData);

	return (
		<Container fluid>
			<Row>
				<Col md="4">
          <UserForm 
          // newUser={addNewUser}
          />
        </Col>
				<Col style={{backgroundColor:"red"}}md="8">
          <Users 
          // deleteUser={handleDelete}
          //  data={studentData} 
          // editUser={saveChanges}
          />
        </Col>
			</Row>
		</Container>
	);
}

export default App;
