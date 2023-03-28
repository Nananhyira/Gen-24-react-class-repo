import React from "react";
import Card from "./Card";

const PizzaTypes = () => {
	return (
		<div className="container type mt-5">
			<div className="text-center">
				<h3>Pizza Types</h3>
			</div>
			<div className="row mt-3">
				<Card
					imgSrc="pizza/typ1.jpg"
					title="Peperoni pizza"
					description="lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip"
				/>
				<Card
					imgSrc="pizza/typ2.jpg"
					title="Vegetable pizza"
					description="lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip"
				/>
				<Card
					imgSrc="pizza/typ3.jpg"
					title="Pineapple pizza"
					description="lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip"
				/>
				<Card
					imgSrc="pizza/typ4.jpg"
					title="Rice pizza"
					description="lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip"
				/>
			</div>
		</div>
	);
};

export default PizzaTypes;
