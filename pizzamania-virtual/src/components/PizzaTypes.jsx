import React from "react";
import Card from "./Card";

const PizzaTypes = () => {
	return (
		<div>
			<h1 className="text-center">Pizza Types</h1>
			<div className="row">
				<Card title="Cheezy pizza" imgSrc="images/cheezy.jpg" />
				<Card title="Family pizza" imgSrc="images/familypizza.jpg" />
				<Card title="Peperoni Pizza" imgSrc="images/perperoni.jpg" />
				<Card title="Vegetable Pizza" imgSrc="images/vegetable.avif" />
			</div>
		</div>
	);
};

export default PizzaTypes;
