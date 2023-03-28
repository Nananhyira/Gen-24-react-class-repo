import About from "./components/About.jsx";
import Carousel from "./components/Carousel.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PizzaTypes from "./components/PizzaTypes.jsx";

function App() {
	return (
		<div>
			<Navbar />
			<Carousel />
			<About />
			<PizzaTypes />
			<Footer />
		</div>
	);
}

export default App;
