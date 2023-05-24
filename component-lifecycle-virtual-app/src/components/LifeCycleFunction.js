import React, { useState, useEffect } from "react";

const LifeCycleFunction = () => {
	const [number, setNum] = useState(0);
  //this function component will mount
	useEffect(() => {
		// setTimeout(() => {
			console.log("component mounted successfully");
		// }, 1000);
	}, []);
 //this function component will mount and component will unmount
	useEffect(()=>{
	  console.log("there has been a change in the state");
	  return ()=>{
	    console.log("component just died");
	  }
	},[number])

	// useEffect(() => {
	// 	console.log("component mounted successfully");

	// 	return () => {
	// 		console.log("component just died");
	// 	};
	// }, [number]);

	const handleClick = () => {
		setNum(number + 1);
	};

	return (
		<div>
			<h1>LifeCycleFunction</h1>
			<h1>count :{number}</h1>
			<button onClick={handleClick}>add</button>
		</div>
	);
};

export default LifeCycleFunction;
