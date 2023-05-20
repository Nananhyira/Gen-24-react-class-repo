import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import SuccesStory from "./pages/SuccesStory";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import Navbars from "./components/Navbars";
import ErrorPage from "./pages/ErrorPage";

const Routing = () => {
	return (
		<Routes>
			<Route path="/success" element={<SuccesStory />} />
			<Route path="/" element={<Home />} />
			<Route path="courses" element={<Courses />} />
			<Route path="/careers" element={<Careers />} />
			<Route path="/careers/:id" element={<CareerDetails />} />
			<Route path="*" element={<ErrorPage/>}/>





			{/* <Route path="/careers/:name/:id" element={<Navbars />} /> */}

			{/* nesting routes  */}
			{/* <Route path="/careers">
				<Route path="" element={<Careers />} />
				<Route path="/careers/:id" element={<CareerDetails />} />
			</Route> */}
		</Routes>
	);
};

export default Routing;
