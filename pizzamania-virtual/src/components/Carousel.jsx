import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/ca4.jpg"  height= "700vh"className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/ca1.jpg"  height= "700vh" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/ca2.jpg" height= "700vh" className="d-block w-100" alt="..."/>
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
  )
}

export default Carousel