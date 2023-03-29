import React from "react";
import Students from "./Students";

const ArrowFunction = () => {
	return (
		<div>
			<ul style={{ display: "flex", justifyContent: "evenly" }}>
				<li style={{ margin: "10px" }}>Success story</li>
				<li style={{ margin: "10px" }}>our course</li>
				<li style={{ margin: "10px" }}>about us </li>
				<li style={{ margin: "10px" }}>Gen 24</li>
			</ul>
			<Students />
		</div>
	);
};

export default ArrowFunction;
