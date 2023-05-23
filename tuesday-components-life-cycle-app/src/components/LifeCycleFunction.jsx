import React, { useEffect, useState } from "react";

const LifeCycleFunction = () => {
	const [num, setNum] = useState(0);let alex = true

let alex100 = new Promise((resolve, reject)=>{
if(alex){
resolve("alex gave me my 100")
}
else{reject(" Alex did not  give me the 100 " )}

})

alex100.then((result)=>{console.log(result)}
)




	// console.log("first");
	// setTimeout(()=>{
  //   console.log("middle");
  // },2000)
	// console.log("last");

	// useEffect(() => {
	// 	setTimeout(() => {
	// 	console.log("components mounted successfully");
	// 	}, );
	// }, [num]);

	// useEffect(() => {
	// 	console.log("state changed");
	// }, [num]);
	// useEffect(() => {
	// 	return () => {
	// 		console.log("dead");
	// 	};
	// }, []);
	return (
		<div>
			<h1>LifeCycleFunction</h1>
			<h1>{num}</h1>
			<button onClick={(e) => setNum(num + 1)}>Add</button>
		</div>
	);
};

export default LifeCycleFunction;
