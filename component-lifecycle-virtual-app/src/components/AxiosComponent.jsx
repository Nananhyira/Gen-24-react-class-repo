import React, { useState, useEffect } from "react";
import  axios  from "axios";

const AxiosComponent = () => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/albums/")
			.then((result) => {
				setAlbums(result.data)
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return <div>
<h1>AxiosComponent</h1>
{albums.map((item)=>{
  return(
    <>
    <h1>name{item.name}</h1>
    <h1>id{item.id}</h1>
    <h1>title{item.title}</h1>
<hr/>

    </>
  )

})}

  </div>;
};

export default AxiosComponent;
