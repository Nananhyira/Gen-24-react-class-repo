import React, { Component } from "react";

class CounterClass extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}

	handleIncrement = () => {
		this.setState({ number: this.state.number + 1 });
	};
	handleDecrement = () => {
		this.setState({ number: this.state.number - 1 });
	};
	render() {
		return (
			<div>
				<h1>Count :{this.state.number} </h1>
				<button onClick={this.handleIncrement}>+</button>
				<button onClick={this.handleDecrement}>-</button>
			</div>
		);
	}
}

export default CounterClass;
