import React, { Component } from 'react';
import SingleUser from "./SingleUser"

 class AllUser extends Component {
  render() {
    return (
      <div>
        <h1>This Components displays all the users in our app </h1>
        <SingleUser/>
      </div>
    )
  }
}

export default AllUser