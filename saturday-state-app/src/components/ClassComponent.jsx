import React, { Component } from "react";

class ClassComponent extends Component {
	constructor(props) {
		super();
		this.state = {
			name: "Mary",
			age: 13,
			job: "Galamsey",
		};
	}
	mouseLand = (e) => {
		this.setState({ name: "kofi" });
	};

	render() {
		return (
			<div>
				<h1 onMouseEnter={this.mouseLand}>My name is {this.state.name} </h1>
				<h1>I am {this.state.age} years old</h1>
				<h1
					onClick={() => {
						this.setState({ job: "Developer" });
					}}>
					I am {this.state.job} operator
				</h1>
			</div>
		);
	}
}

export default ClassComponent;
