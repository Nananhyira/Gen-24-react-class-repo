import React, { useState } from "react";

const FunctionalComponent = () => {
	const [name, setName] = useState("Mary");
	const [count, setCount] = useState(0);

	function handleIncrement() {
		setCount(count + 1);
	}

	return (
		<div>
			<h1>Counter {count}</h1>
			<button onClick={handleIncrement}>Increment</button>
			<button
				onClick={() => {
					setCount(count - 5);
				}}>
				Decrement
			</button>
		</div>
	);
};

export default FunctionalComponent;
