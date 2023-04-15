import React, { Component } from 'react';

class ClassExample extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"codetrain"
    }

  }
  render() {
    return (
      <div>
        <h1>welcome {this.state.name}</h1>
      </div>
    );
  }
}

export default ClassExample;
