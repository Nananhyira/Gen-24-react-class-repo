import React, { Component } from 'react';
import SingleUser from "./SingleUser"
import {Row, Col} from "react-bootstrap"

 class AllUser extends Component {
  render() {
    return (
      <Row>
        <h1>This Components displays all the users in our app </h1>
        {this.props.data.map((item,index)=>{
          return (
            <Col md="4">
          <SingleUser  deleteUser={this.props.deleteUser}details={item}/>
          </Col>
          )
        })}
       
      </Row>
    )
  }
}

export default AllUser