import React, { Component } from "react";

class FormClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			gen: "",
		};
	}
	handleNameChange = (e) => {
		e.preventDefault();
		this.setState({ name: e.target.value });
		// console.log(this.state.name);
	};
	handleEmailChange = (e) => {
		e.preventDefault();
		this.setState({ email: e.target.value });
	};
	handleGenChange = (e) => {
		e.preventDefault();
		this.setState({ gen: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		let studentsDetails = {
			name: this.state.name,
			email: this.state.email,
			gen: this.state.gen,
		};
		console.log(studentsDetails);
		this.setState({
			name: "",
			email: "",
			gen: "",
		});
	};

	render() {
		return (
			<div>
				<h1>Student form class </h1>
				<form onSubmit={this.handleSubmit}>
					<label>Fullname</label>
					<input
						type="text"
						name=""
						value={this.state.name}
						onChange={this.handleNameChange}
					/>
					<br />
					<label>Email</label>
					<input
						type="email"
						name=""
						value={this.state.email}
						onChange={this.handleEmailChange}
					/>
					<br />
					<label>Gen</label>
					<input
						type="text"
						name=""
						value={this.state.gen}
						onChange={this.handleGenChange}
					/>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
export default FormClass;
