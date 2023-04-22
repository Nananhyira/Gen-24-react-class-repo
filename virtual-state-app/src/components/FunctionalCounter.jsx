import React, { useState } from "react";

function FunctionalCounter() {
	const [number, setNumber] = useState(0);

	const handleClick = () => {
		setNumber(number + 1);
	};
  const handleDecrease = () => {
    setNumber(number - 1);
  }

	return (
		<div>
			<h1>counter {number}</h1>
			<button onClick={handleClick}>increment</button>
			<button onClick={handleDecrease}>Decrement</button>
		</div>
	);
}

export default FunctionalCounter;
