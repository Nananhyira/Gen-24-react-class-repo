import React, { useState } from "react";

function FormFunction() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	// const [details, setDetails] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		let studentDetails = {
			name,
			email,
			gen,
		};
		console.log(studentDetails);
	};

	return (
		<div>
			<h1> Functional Registration Form </h1>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type="text"
					onChange={(e) => {
						e.preventDefault();
						setName(e.target.value);
					}}
					value={name}
					name="name"
				/>
				<br />
				<label>Email</label>
				<input
					type="email"
					onChange={(e) => {
						e.preventDefault();
						setEmail(e.target.value);
					}}
					value={email}
					name="email"
				/>
				<br />
				<label>Gen</label>
				<input
					type="text"
					name="gen"
					value={gen}
					onChange={(e) => {
						e.preventDefault();
						setGen(e.target.value);
					}}
				/>
				<br />
				<input onClick={handleSubmit} type="submit" value="save" />
			</form>
		</div>
	);
}

export default FormFunction;
