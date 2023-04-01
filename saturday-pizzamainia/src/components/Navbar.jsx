import React, { Component } from 'react'

 class Navbar extends Component {
  render() {
    return (
			<div>
				<nav className=" navbar-home navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">
						PIZZAMANIA
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-link" href="#">
								About Pizza <span className="sr-only">(current)</span>
							</a>
							<a className="nav-link" href="#">
								Pizza Types <span className="sr-only">(current)</span>
							</a>
						</ul>
					</div>
				</nav>
			</div>
		);
  }
}

export default Navbar