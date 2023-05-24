import React, { Component } from "react";

class LifeCycleClass extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}

	componentDidMount() {
		setTimeout(() => {
			console.log("component mounted successfully");
		}, 1000);
	}

	componentDidUpdate() {
		console.log("there is change in the state");
	}
  componentWillUnmount(){
    console.log("component is dead");

  }

	handleClick = (e) => {
		e.preventDefault();
		this.setState({ number: this.state.number + 1 });
	};
	render() {
		return (
			<div>
				<h1>this is a life cycle class components</h1>
				<h1>count :{this.state.number}</h1>
				<button onClick={this.handleClick}>Add</button>
			</div>
		);
	}
}

export default LifeCycleClass;
