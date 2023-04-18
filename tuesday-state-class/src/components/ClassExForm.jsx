import React, { Component } from "react";

export class ClassExForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			pword: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const pword = e.target.password.value;

		this.setState({
			name,
			email,
			pword,
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="name" placeholder="Name" />
					<input type="email" name="email" placeholder="email" />
					<input type="text" name="password" placeholder="submit" />
					<input type="submit" value="Submit" />
				</form>

				<h1>{this.state.name}</h1>
				<h1>{this.state.email}</h1>
				<h1>{this.state.pword}</h1>
			</div>
		);
	}
}

export default ClassExForm;
