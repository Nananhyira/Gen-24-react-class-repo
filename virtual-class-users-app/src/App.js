import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from "react";
import { Container ,Row,Col} from "react-bootstrap";
import UserForm from "./components/UserForm";
import AllUser from "./components/AllUser";
import {v4 as uuid} from "uuid"

function App() {
  const [users, setUsers]=useState([
    {name:"Ocarlyn ghartey", email:"os@gmail.com", gen:24, id:uuid()},
    {name:"father Bernard", email:"father@gmail.com" , gen :24, id:uuid()}
   ])

  const addNewUser=(newInfo)=>{
      setUsers([...users,newInfo])
    // users.push(newInfo)
    console.log(users)
  }

  const deleteUser=(id)=>{
     const paidUser = users.filter((user)=>{
       if(id !== user.id)
       return user
     })
   setUsers(paidUser)
 
  }

	return (
		<Container>
			<Row>
				<Col>
        <UserForm newUser={addNewUser}/>
        </Col>

				<Col>
        <AllUser deleteUser={deleteUser} data={users}/>
        </Col>
			</Row>
		</Container>
	);
}

export default App;
