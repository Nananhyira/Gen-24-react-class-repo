import React, { useState, useEffect } from "react";

const LifeCycleFunction = () => {
	const [num, setNum] = useState(0);
	//componentdidmount
	useEffect(() => {
    setTimeout(()=>{console.log("functional component rendered successfully")},5000)
		
	}, []);
	//component will update
	useEffect(() => {
		console.log("the state was updated with " + num);
	}, [num]);

	//componentwillunmount
	// useEffect(() => {
	// 	return () => {
	// 		console.log("i am dieing");
	// 	};
	// }, []);

	// useEffect(() => {
	// 	console.log("functional component rendered successfully");
	// 	return () => {
	// 		console.log("i am dieing");
	// 	};
	// }, [num]);

	const handleClick = (e) => {
		setNum(num + 1);
	};
	return (
		<div>
			<h1>This is a Life Cycle functional components </h1>
			<p onClick={handleClick}>number :{num}</p>
		</div>
	);
};

export default LifeCycleFunction;
