import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";
import Types from "./components/Types";

function App() {
	return (
		<>
			<Navbar />
			<Carousel />
			<About />
      <Types/>
      <Footer/>
		</>
	);
}

export default App;
