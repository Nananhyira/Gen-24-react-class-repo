import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Navbars />
			<Routing />
		</>
	);
}

export default App;
