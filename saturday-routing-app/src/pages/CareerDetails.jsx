import React from 'react'
import {useParams} from "react-router-dom"

const CareerDetails = () => {
  const {id} =useParams()

  return (
		<div>
      <h1>this is what you typed in the URL {id} </h1>
			<h1> CareerDetails</h1>
      <p>this is CareerDetails page</p>
		</div>
	);
}

export default CareerDetails