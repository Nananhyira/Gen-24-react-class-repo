import React, { useState } from "react";
import { food } from "../data";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";

const Services = () => {
	return (
		<Row>
			<h1 className="text-center">This is the ServiceDetails page</h1>
			{food.map((item) => {
				return (
					<Col md={4}>
						<Link to={`/service/${item.id}`}>
							<Card style={{ width: "17rem" }}>
								<Card.Img variant="top" src={item.imageUrl} />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>Price:{item.price}</Card.Text>
									<Link to={`/service/${item.id}`}  variant="primary">
										see details
									</Link>
								</Card.Body>
							</Card>
						</Link>
					</Col>
				);
			})}
		</Row>
	);
};

export default Services;
