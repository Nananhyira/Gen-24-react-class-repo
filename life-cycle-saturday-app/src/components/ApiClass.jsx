import React, { Component } from "react";
import axios  from "axios";

class ApiClass extends Component {
	constructor(props) {
		super(props);
		this.state = { users: [] };
	}

	// componentDidMount() {
	// 	fetch("https://jsonplaceholder.typicode.com/users/")
	// 		.then((result) => result.json())
	// 		.then((data) => this.setState({ users: data }))
	// 		.catch((err) => console.log(err));
	// }

	getData = async () => {
		try {
      const response = await axios.get(
			"https://jsonplaceholder.typicode.com/users/"
		)
    const data = await response.data
    this.setState({ users: data })

	}
  catch (error) {
      console.log(error)
      
    }
  }

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<>
				<div>
					<h1>This is a Api class components </h1>
				</div>
				{this.state.users.map((user) => {
					return (
						<div key={user.id}>
							<ol>
								<l1>name: {user.name}</l1>
								<l1>Username: {user.username}</l1>
								<l1>email: {user.email}</l1>
							</ol>
						</div>
					);
				})}
			</>
		);
	}
}

export default ApiClass;
