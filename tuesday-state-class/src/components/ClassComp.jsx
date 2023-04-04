import React, { Component } from "react";

class ClassComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Abdul",
			age: 20,
			height: "3ft",
		};
	}

	handleMouseEnter = () => {
		// this.setState({ age: this.state.age + 20 });
	};

	render() {
		return (
			<div>
				<h1 on>class </h1>
				<h1>welcome {this.state.name} </h1>
				<p onMouseEnter={() => this.setState({ age: this.state.age + 20 })}>
					I am {this.state.age} years old
				</p>
				<p>height {this.state.height}</p>
			</div>
		);
	}
}

export default ClassComp;
