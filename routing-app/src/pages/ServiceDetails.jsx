import React from "react";
import { useParams } from "react-router-dom";
import { food } from "../data";
import { Card, ListGroup } from "react-bootstrap";
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
						<div
							style={{
								margin: "50px",
								padding: "20px",
								width: "70%",
								height: "155vh",
								display: "flex",
								justifyContent: "center",
								border: "1px solid red",
							}}>
							{/* <h1>{id}</h1> */}
							{/* <img
								style={{ width: "90%", height: "50vh", borderRadius: "5px" }}
								src={item?.imageUrl}
								alt="food"
							/>
							<div style={{ padding: "5px" }}>
								<p>Name:{item.name}</p>
								<p>price:{item.price}</p>
								<p>Stars:{item.stars}</p>
								<p>price:{item.price}</p>
								<p>CookTime:{item.cookTime}</p>
								<p>Orgins:{item.origins}</p>
								<p>Tags:{item.tags}</p>
							</div> */}

							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={item?.imageUrl} />
								<Card.Body>
									<Card.Title>Name: {item.name}</Card.Title>
									<Card.Text>CookTime:{item.cookTime}</Card.Text>

									<ListGroup className="list-group-flush">
										<ListGroup.Item>price:{item.price}</ListGroup.Item>
										<ListGroup.Item>CookTime:{item.cookTime}</ListGroup.Item>
										<ListGroup.Item>Orgins:{item.origins}</ListGroup.Item>
										<ListGroup.Item>Tags:{item.tags}</ListGroup.Item>
									</ListGroup>
								</Card.Body>
							</Card>
						</div>
					);
			})}
		</>
	);
};

export default ServiceDetails;
