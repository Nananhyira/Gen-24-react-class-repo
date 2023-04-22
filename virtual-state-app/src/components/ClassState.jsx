import React, { Component } from "react";

export class ClassState extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Mandelson",
			age: 13,
			favColour: "red",
			friends: ["john", "oscarlyn", "Abdul"],
		};
		// if(this.state.age===14){
		//   this.setState({name:"Oscarlyn"})
		// }
		// this.setState({})
	}
	handleClick = (e) => {
		this.setState({ name: "Oscarlyn" });
	};
	render() {
		return (
			<div>
				<h1>welocme virtual class</h1>
				<h2>we are learning react state</h2>
				<h1 onClick={this.handleClick}>
					{this.state.name} is going to our lecturer </h1>
         <h1 onMouseEnter={()=>{this.setState({age:this.state.age+10})}}>he is {this.state.age} years old</h1> 
				<h3>
					these are the names of the students{" "}
					{this.state.friends.map((item, index) => {
						return <p>{item}</p>;
					})}
				</h3>
			</div>
		);
	}
}

export default ClassState;
