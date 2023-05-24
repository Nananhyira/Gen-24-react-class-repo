import React, { Component } from "react";

class ApiComponents extends Component {
	constructor() {
		super();
		this.state = { todos: [] };
	}
	componentDidMount() {
		setTimeout(() => {
			fetch("https://jsonplaceholder.typicode.com/todos/")
				.then((result) => result.json())
				.then((data) => this.setState({ todos: data }))
				.catch((error) => {
					console.log(error);
				});
		}, 3000);
	}

	render() {
		return (
			<div>
				<h1>we are going make api calls from json placeholder</h1>
				{this.state.todos.map((todo) => {
					return (
						<>
							<h1>Name{todo.userId}</h1>
							<h1>Name{todo.title}</h1>
							<h1>Name{todo.completed}</h1>
						</>
					);
				})}
			</div>
		);
	}
}

export default ApiComponents;

// import React from 'react'

// const ApiComponents = () => {

//   return (
//     <div></div>
//   )
// }

// export default ApiComponents
