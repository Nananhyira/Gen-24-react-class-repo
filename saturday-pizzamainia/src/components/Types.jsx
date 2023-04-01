import React, { Component } from "react";
import Title from "./Title";
import Card from "./Card";
let title = "Pizza Types";
class Types extends Component {
	render() {
		return (
			<div>
				<Title heading={title} />
				<div className="row">
					<Card imgSrc="images/8.jpg" title="Tasty" />
					<Card imgSrc="images/6.jpg" title="Sausage" />
					<Card imgSrc="images/9.jpg" title="Banana" />
					<Card imgSrc="images/7.jpg" title="Goat" />
				</div>
			</div>
		);
	}
}

export default Types;
