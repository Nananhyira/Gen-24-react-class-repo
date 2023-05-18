import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Items from "./pages/Items";
import ItemsDetails from "./pages/ItemsDetails";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="items" element={<Items/>}/>
      <Route path="items/:id" element={<ItemsDetails/>}/>
		</Routes>
	);
};

export default Routing;
