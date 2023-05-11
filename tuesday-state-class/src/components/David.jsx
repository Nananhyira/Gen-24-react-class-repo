import React, { Component } from 'react'

 class David extends Component {
  constructor(props){
    super(props)
    this.state = {
			student: { favColor: "blue", hobbies: "reading" },
			name: "Elvis",
			age: 45,
			email: "elvis@gmail.com",
			sick: false,
			mouse: "This is Elvis and David's state class",
			title: "This is a class components",
		};
  }

  handleMouse=()=>{
    this.setState({age:this.state.age+5})
  }

  Click=()=>{
   this.setState({ title: "This is Elvis and David's state class" });
  }

  render() {
    return (
			<div>
				<h1 onClick={this.Click}>{this.state.title}</h1>
				<p>Email: {this.state.email}</p>
				<li>my name is {this.state.name}</li>
				<h1>
					{this.state.student.favColor}, {this.state.student.hobbies}
				</h1>
				<p onMouseEnter={this.handleMouse}>Age:{this.state.age}</p>
			</div>
		);
  }
}

export default David