import React from "react";

const Title = ({ heading }) => {
	return (
		<div className="container-fluid about-pizza">
			<div className="row justify-content-center">
				<h2>{heading}</h2>
			</div>
		</div>
	);
};

export default Title;
