import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
			<p>page not found</p>
			<Link to="/">
				Go To Home
			</Link>
		</div>
	);
};

export default ErrorPage;
