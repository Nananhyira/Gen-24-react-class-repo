import React from 'react'
import { Card,Button,Row,Col } from 'react-bootstrap'
import EditUser from "./EditUser"

const SingleUser = (props) => {
  return (
    <Row>
      <Col md="4">
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Students details</Card.Title>
            <p>Name:{props.details.name}</p>
            <p> Email:{props.details.email}</p>
            <p>Gen :{props.details.gen}</p>
            <EditUser data={props.details} editUser={props.editUser}/>
            <Button  onClick={()=>{props.deleteUser(props.details.id)}} variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SingleUser