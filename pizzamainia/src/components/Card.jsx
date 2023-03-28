import React from "react";

const Card = ({ title, imgSrc, description }) => {
	// console.log(props);

	return (
		<div className="col-md-3">
			<div className="card">
				<img src={imgSrc} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
