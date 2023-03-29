import React from "react";
import ArrowFunction from "./components/ArrowFunction";
import Students from "./components/Students";
import Fellows from "./components/Fellows";
import ClassComp from "./components/ClassComp";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  
	return (
		<div className="App">
			<ClassComp  name="React"/>
			<h1>This is gen 24 virtual students</h1>
			<Students name="Oscarlyn" color="green" />
			<Students name="Abdul" color="black" />
			<Students name="Shamira" color="white" />
			<Students name="MANDELSON" color="white" />
			<Students name="Sampson" color="blue" />
			<Students name="Selasi" color="blue" />
			<Students name="Bernard" color="red" />
			<Students name="Credo" color="blue" />
			<Students name="Jeffrey" color="red" />
			<Students name="Ugochukwu" color="green" />
			<Students name="SanDRA" color="gold" />
			<Students name="FaISAL" color="skyblue" />

			{/* <ArrowFunction />
			<hr/>
      
			<hr />
      <Contact/> */}
			{/* <ArrowFunction />
			
			<Fellows /> */}
		</div>
	);
}

export default App;
