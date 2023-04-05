import React from 'react'

const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light navColor">
  <a className="navbar-brand link-items" href="#">Pizzamania</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link link-items" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link  link-items" href="#">AboutPizza</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link  link-items">PizzaTypes</a>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar
