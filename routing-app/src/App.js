import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

function App() {
	return (
		<BrowserRouter>
     <Navbars/>
     <Routing/>
    </BrowserRouter>
	);
}

export default App;
