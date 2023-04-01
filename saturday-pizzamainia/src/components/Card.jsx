import React from "react";

const Card = (props) => {
	return (
		<div className="col-md-3">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src={props.imgSrc}
					className="card-img-top"
					alt="Pizza"
					height="150vh"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title} Pizza</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo .
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
