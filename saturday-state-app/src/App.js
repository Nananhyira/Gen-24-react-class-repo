import "./App.css";
import ClassComponent from "./components/ClassComponent";
import ClassExample from "./components/ClassExample";
import CounterClass from "./components/CounterClass";
import FormClass from "./components/FormClass";
import FormFunction from "./components/FormFunction";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
	return (
		<div className="App">
			{/* <ClassComponent />
			<ClassExample /> */}
			{/* <FunctionalComponent/> */}
			{/* <CounterClass /> */}
			<FormClass />
			<hr></hr>
			<FormFunction />
		</div>
	);
}

export default App;
