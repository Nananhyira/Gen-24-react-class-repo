import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { food } from "../data";
import { Link } from "react-router-dom";

const Careers = () => {
	return (
		<Row>
			{food.map((item) => {
				return (
					<Col md={4}>
            <Link to={`/careers/${item.id}`}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={item.imageUrl} />
							<Card.Body>
								<Card.Title>Name :{item.name}</Card.Title>
								<Card.Text>
									<p>Price :{item.price}</p>
								</Card.Text>
								<Button variant="light">
									learn more
								</Button>
							</Card.Body>
						</Card>
            </Link>
					</Col>
				);
			})}
		</Row>
	);
};

export default Careers;
