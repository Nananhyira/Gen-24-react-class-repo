import React, { Component } from 'react'

 class Carousel extends Component {
  render() {
    return (
      <div>

		<div className="container-fluid">
	   <div className="row">
	       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner carousel-edit">
        <div className="carousel-item active">
        <img src="images/1.jpg" className="d-block w-100" alt="Pizza"/>
        </div>
        <div className="carousel-item">
        <img src="images/3.jpg" className="d-block w-100" alt="Pizza"/>
        </div>
        <div className="carousel-item">
        <img src="images/2.jpg" className="d-block w-100" alt="Pizza"/>
        </div>
    </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </button>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

export default Carousel