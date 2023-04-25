import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
import React,{useState} from 'react'

function App() {
  const[studentData, setStudentData] =useState([
    {name:"robert", email:"rob@example.com", gen:24},
    {name:"Al", email:"ali@example.com", gen:24},
    {name:"Seth", email:"seth@example.com", gen:24},
])
//this function adds new item to the studentData array
const addNewUser = (newUserData) =>{
  setStudentData([...studentData, newUserData])
  // studentData.push(newUserData)
}
// addNewUser({name:"gideon", email:"gideon@gmail.com", gen:23})
console.log(studentData);
	return (
		<Container fluid>
			<Row>
				<Col md="4">
          <UserForm newUser={addNewUser}/>
        </Col>
				<Col md="8">
          <Users data={studentData}/>
        </Col>
			</Row>
		</Container>
	);
}

export default App;
