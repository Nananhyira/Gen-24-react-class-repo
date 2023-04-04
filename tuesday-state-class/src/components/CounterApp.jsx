import React, { Component } from "react";

export default class CounterApp extends Component {
	constructor(props) {
		super(props);
		this.state = { name: 0 };
	}

	handleDecrement = () => {
		this.setState({ name: this.state.name - 1 });
	};
	render() {
		return (
			<div>
				<h1>Counter App</h1>
				<h1>counter : {this.state.name}</h1>
				<button
					onClick={() => {
						this.setState({ name: this.state.name + 1 });
					}}>
					Increment
				</button>
				<button onClick={this.handleDecrement}>Decrement</button>
			</div>
		);
	}
}
