import React,{useState} from 'react'

const Elvis = () => {
  const [name, setName] = useState("ELvis");
  const [any, setAny] = useState({
		student: { favColor: "blue", hobbies: "reading" },
		name: "Elvis",
		age: 45,
		email: "elvis@gmail.com",
		sick: false,
		mouse: "This is Elvis and David's state class",
		title: "This is a Functional components",});


const Click=()=>{
  setName("you are welcome")
}

  return (
    <div>
      <h1>{any.title}</h1>
      <h1 onClick={Click}>hellooooo world</h1>
      <h1>my name is  {name} Thank you</h1>
      <h1>i am {any.age} yaers old </h1>
    </div>
  )
}

export default Elvis