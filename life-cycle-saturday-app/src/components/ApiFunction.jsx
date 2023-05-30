import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiFunction = () => {
	const [post, setPost] = useState([]);
	const getPost = async () => {
		try {
			let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
			let data = await res.data;
			setPost(data);
		} catch (error) {
			console.log(error);
		}
	}

	console.log(post);

	useEffect(() => {
		getPost();
	}, []);

	return (
		<div>
			<h1>This is a Api function components </h1>
			{post.map((item, index) => {
				return (
					<ol key={index}>
						<li>users:{item.userId}</li>
						<li>body :{item.body}</li>
						<li>title :{item.title}</li>
					</ol>
				);
			})}
		</div>
	);
};

export default ApiFunction;


// let fostergive = "candy";

// let fosterp = new Promise((resolve, reject) => {
// 	if (fostergive === "biscuit") {
// 		resolve("Foster has fulfilled his promise");
// 	} else {
// 		reject("foster did not fulfill his promise");
// 	}
// });

// fosterp
// 	.then((res) => {
// 		console.log(res + " good job");
// 	})
// 	.catch((error) => {
// 		console.log(error + " bad behavior");
// 	});
