import React from "react";
import Career from "./Career";

class ClassComp extends React.Component {
	render() {
		return (
			<div>
				<h1>this is class component</h1>
				<h1>{this.props.name} is very easy</h1>
				<Career />
			</div>
		);
	}
}
export default ClassComp;
