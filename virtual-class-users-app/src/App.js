import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from "react";
import { Container ,Row,Col} from "react-bootstrap";
import UserForm from "./components/UserForm";
import AllUser from "./components/AllUser";

function App() {
  const [users, setUsers]=useState([])

  const addNewUser=(newInfo)=>{
      setUsers([...users,newInfo])
    // users.push(newInfo)
    console.log(users)
  }

	return (
		<Container>
			<Row>
				<Col>
        <UserForm newUser={addNewUser}/>
        </Col>

				<Col>
        <AllUser/>
        </Col>
			</Row>
		</Container>
	);
}

export default App;
