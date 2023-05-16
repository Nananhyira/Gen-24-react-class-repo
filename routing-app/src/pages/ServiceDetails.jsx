import React from "react";
import { useParams } from "react-router-dom";
import { food } from "../data";
//import  "../assets"

const ServiceDetails = () => {
	const { id } = useParams();

	//  const details = food.find((item)=>id===item.id)

	return (
		<>
			<h1>This is the ServiceDetails page</h1>
			{food.map((item) => {
				if (id === item.id)
					return (
						<div style={{ width: "60%", height: "60vh", display:"flex"}}>
							{/* <h1>{id}</h1> */}
							<img
								style={{ width: "30%", height: "50vh" }}
								src={item?.imageUrl}
								alt="food"
							/>
							<p>Name:{item.name}</p>
							<p>price:{item.price}</p>
							<p>CookTime:{item.cookTime}</p>
						</div>
					);
			})}
		</>
	);
};

export default ServiceDetails;
