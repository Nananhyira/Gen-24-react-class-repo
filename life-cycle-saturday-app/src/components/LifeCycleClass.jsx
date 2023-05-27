import React, { Component } from "react";

class LifeCycleClass extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}
	componentDidMount() {
		setTimeout(() => {
			console.log("component rendered successfully");
		}, 2000);
	}
	// components  will update
	componentDidUpdate() {
		console.log("this is the " + this.state.number);
	}

	componentWillUnmount() {
		console.log("i am dieing");
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState({ number: this.state.number + 1 });
	};
	
	render() {
		return (
			<div>
				<h1>This is a Life Cycle class components </h1>
				<h1 onClick={this.handleClick}>Number {this.state.number}</h1>
			</div>
		);
	}
}

export default LifeCycleClass;
