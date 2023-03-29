function Students(props) {
	console.log(props);
	return (
		<div style={{backgroundColor:props.color}}>
			<h1>hello virtual class</h1>
			<h1>{props.name} are welcome</h1>
			<p>we wil learn react</p>
			<hr />
		</div>
	);
}
export default Students;
