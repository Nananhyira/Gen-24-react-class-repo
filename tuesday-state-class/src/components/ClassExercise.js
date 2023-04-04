import React, { useState } from "react";

function ClassExercise() {
	const [number, setNumber] = useState(0);

  const myCounter=()=>{
    setNumber(number-10)

  }
	return (
		<div>
			<h1>Counter App</h1>
			<h1>Number : {number}</h1>
			<button onClick={() => setNumber(number + 1)}>Increase</button>
			<button onClick={myCounter}>Decrease</button>
		</div>
	);
}

export default ClassExercise;
