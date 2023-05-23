import React, { Component } from "react";

class LifeCycleClass extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}

	componentDidMount() {
		setTimeout(() => {
			console.log("components mounted successfully");
		}, 1000);
	}
	handleClick = (e) => {
		this.setState({ number: this.state.number + 1 });
	};

	componentDidUpdate() {
		console.log("value updated");
	}
	componentWillUnmount() {
		console.log("component unmount");
	}

	render() {
		return (
			<div>
				<h1>Class Life Cycle</h1>
				<h1>{this.state.number}</h1>
				<button onClick={this.handleClick}>Add</button>
			</div>
		);
	}
}

export default LifeCycleClass;
