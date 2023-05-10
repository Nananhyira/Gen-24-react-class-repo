import "./App.css";
import ClassExForm from "./components/ClassExForm";
import CounterApp from "./components/CounterApp";
import CounterFunction from "./components/CounterFunction";
import FormClass from "./components/FormClass";
import Formfunction from "./components/Formfunction";
import Franklin from "./components/Franklin";

function App() {
	return (
		<div className="App">
			{/* <ClassComp /> */}
			{/* <CounterApp />
			<hr></hr>
			<CounterFunction /> */}
			{/* <ClassExercise /> */}
			{/* <Formfunction /> */}
			{/* <ClassExForm /> */}
			<Franklin title="Life Skills" sub="React"/>
			<Franklin title="RME" sub="JavaScript"/>
			<Franklin title="maths" sub="NodeJS"/>
		</div>
	);
}

export default App;
