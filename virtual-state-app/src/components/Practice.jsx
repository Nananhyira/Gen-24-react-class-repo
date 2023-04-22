import React, { Component } from "react";

export class Practice extends Component {
	constructor() {
		super();
		this.state = { number: 0 };
	}
	handleIncrement = () => {
		this.setState({ number: this.state.number + 1 });
	};

	render() {
		return (
			<div>
				<h1>Count: {this.state.number}</h1>
				<button onClick={this.handleIncrement}>increment</button>
				<button
					onClick={() => {
						this.setState({ number: this.state.number - 1 });
					}}>
					Decrement
				</button>
			</div>
		);
	}
}

export default Practice;
