import React, { Component } from "react";

class Franklin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: ["ama", 23, "i am girl", "sam"],
			name: Math.random(),
		};
		console.log(this.state);
		console.log(this.props);
	}
	render() {
		return (
			<>
				<h1>{this.props.title}</h1>
				<div>we are learning {this.props.sub}</div>
				{this.state.users.map((item, index) => {
					return <h1 key={index}>{item}</h1>;
				})}
				<h1>this is the end of the components</h1>
        <h1>{this.state.name}</h1>
				<hr />
			</>
		);
	}
}

export default Franklin;
