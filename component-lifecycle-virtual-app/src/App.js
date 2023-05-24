import "./App.css";
import ApiComponents from "./components/ApiComponents";
import AxiosComponent from "./components/AxiosComponent";
import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunction from "./components/LifeCycleFunction";

// console.log("first");
// setTimeout(() => {
// 	console.log("middle");
// }, 1000);
// console.log("last");

// let father = "God";
// const myPromise = new Promise((resolve, reject) => {
// 	if (father === "Bernard") {
// 		resolve("promise fulfilled");
// 	} else {
// 		reject("promise rejected");
// 	}
// });

// myPromise
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

function App() {
	return (
		<div className="App">
			{/* <LifeCycleClass/> */}
			{/* <LifeCycleFunction/> */}
			{/* <ApiComponents /> */}
      <AxiosComponent/>
		</div>
	);
}

export default App;
