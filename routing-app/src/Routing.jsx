import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import ErrorPage from "./pages/ErrorPage";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/about" element={<About />} />
			<Route path="/service" element={<Services />} />
      <Route path="/me" element={
      <div>
        <h1>this is my own component inside routing file</h1>
      </div>}/>

      <Route path="/service/:id" element={<ServiceDetails />} />
      <Route path="*" element={<ErrorPage/>}/>
		</Routes>
	);
};

export default Routing;
