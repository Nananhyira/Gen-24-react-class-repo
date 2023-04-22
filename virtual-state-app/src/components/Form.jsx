import React, { Component } from "react";

class Form extends Component {
	render() {
		return (
			<form>
				<h1>Registration form</h1>
				<label>Name</label>
				<input type="text" />
				<br />
				<label>Email</label>
				<input type="text" />
				<br />
				<label>Gen</label>
				<input type="text" />
        <input type="submit" value="submit"></input>
			</form>
		);
	}
}

export default Form;
