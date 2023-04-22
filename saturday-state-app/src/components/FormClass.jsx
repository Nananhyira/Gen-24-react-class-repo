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
	// handleName = (e) => {
	// 	e.preventDefault();
	// let name=e.target.value
	// console.log(name);
	// };
	// handleEmail = (e) => {
	//   e.preventDefault();
	//   let email=e.target.value
	//   console.log(email);
	// }
	handleInputChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
		// console.log(this.state.name);
		// console.log(this.state.email);
		// console.log(this.state.gen);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let details = {
			name: this.state.name,
			email: this.state.email,
			gen: this.state.gen,
		};
		this.setState({ details });
		console.log(details);
		// this.setState({ name: "", email: "", gen: "" });
	};

	render() {
		return (
			<div>
				<h1>Registration Form </h1>
				<form onSubmit={this.handleSubmit}>
					<label>Name</label>
					<input
						type="text"
						onInput={this.handleInputChange}
						value={this.state.name}
						name="name"
					/>
					<br />
					<label>Email</label>
					<input
						type="email"
						onChange={this.handleInputChange}
						value={this.state.email}
						name="email"
					/>
					<br />
					<label>Gen</label>
					<input
						type="text"
						name="gen"
						value={this.state.gen}
						onChange={this.handleInputChange}
					/>
					<br />
					<input onClick={this.handleSubmit} type="submit" value="save" />
				</form>
			</div>
		);
	}
}

export default FormClass;
