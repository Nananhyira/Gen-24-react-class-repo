import React, { Component } from "react";

class ApiCall extends Component {
  constructor(){
    super()
    this.state={users:[]}
  }

	getData = async () => {
		try {
			const data = await fetch("https://jsonplaceholder.typicode.com/users");
			const result = await data.json();
      this.setState({users:result})
			console.log(this.state.users);
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		this.getData();
		// fetch("https://jsonplaceholder.typicode.com/todos/1")
		// 	.then((response) => response.json())
		// 	.then((json) => console.log(json))
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}
	render() {
		return (
			<div>
        {this.state.users.map((item)=>{
          return (
						<>
							<p>Name{item.name}</p>
							<p>phone{item.phone}</p>
							<p>username{item.username}</p>
						</>
					);
        })}
				<h1>this is a todo list</h1>
			</div>
		);
	}
}

export default ApiCall;
