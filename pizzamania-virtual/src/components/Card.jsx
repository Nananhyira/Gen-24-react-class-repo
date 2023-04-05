import React from "react";

const Card = (props) => {
	return (
		<div className="col-md-3">
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.imgSrc} className="card-img-top" alt="..." />
				<h1>{props.title}</h1>
				<div className="card-body">
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
