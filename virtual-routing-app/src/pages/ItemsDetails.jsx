import React from "react";
import { useParams } from "react-router-dom";
import { food } from "../data";

const ItemsDetails = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>This is the itmes details page</h1>
			{food.map((item, index) => {
				if (item.id === id)
					return (
						<>
							{/* <p>{id}</p> */}
							<h3>{item.name}</h3>
						</>
					);
			})}
		</div>
	);
};

export default ItemsDetails;
