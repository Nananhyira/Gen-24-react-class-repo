import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { food } from "../data";
import { Link } from "react-router-dom";

const Items = () => {
	return (
		<Row>
			<h1>This is the items page</h1>
			{food.map((item) => {
				return (
					<Col md={4}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={item.imageUrl} />
							<Card.Body>
								<Card.Title>name: {item.name}</Card.Title>
								<Card.Text>Price:${item.price}</Card.Text>
								<Link to={`/items/${item.id}`}>show more</Link>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
};
export default Items;
