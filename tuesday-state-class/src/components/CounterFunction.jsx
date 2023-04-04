import React, { useState } from "react";

const CounterFunction = () => {
	const [number, setNumber] = useState(0);

	const handleCounter = (e) => {
		e.preventDefault();
		setNumber(number + 5);
	};

	return (
		<div>
			<h1>Counter :{number} </h1>
			<button onClick={handleCounter}>+</button>
			<button
				onClick={(e) => {
					e.preventDefault();
					setNumber(number - 5);
				}}>
				-
			</button>
		</div>
	);
};

export default CounterFunction;
