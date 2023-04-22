import React from "react";

const Food = (props) => {
	return (
		<div>
			<p>This is {props.title}</p>
			<img src="images/8.jpg" alt="food image" width="60%" height={400} />
		</div>
	);
};

export default Food;
