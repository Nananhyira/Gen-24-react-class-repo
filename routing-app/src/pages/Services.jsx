import React,{useState} from 'react'
import { food } from '../data';
import { Link } from 'react-router-dom';

const Services = () => {
 
  return (
		<>
			<h1>This is the ServiceDetails page</h1>
			{food.map((item) => {
				return (
					<>
						<Link to={`/service/${item.id}`}><h1>{item.name}</h1></Link>
            <h3> Price:{item.price}</h3>
            
            <br/>
            <hr/>
					</>
				);
			})}
		</>
	);
 

}

export default Services