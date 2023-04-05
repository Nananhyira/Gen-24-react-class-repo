import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaTypes from "./components/PizzaTypes";



function App() {
	return (
		<>
			<Navbar />
			<Carousel />
			<About />
      <PizzaTypes/>
			<Footer />
		</>
	);
}

export default App;
