import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<header className="navbar">
					<h2>
						<a>Recipe App</a>
					</h2>
					<nav>
						<li>
							<a href="">New Recipe</a>
						</li>
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">About</a>
						</li>
						<li>
							<a href="">Contact Us</a>
						</li>
					</nav>
				</header>
			</div>
		);
	}
}

export default Navbar;
