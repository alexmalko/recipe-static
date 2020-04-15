import React, { Component } from 'react';
import './Recipe.css';

class recipe extends Component {
	render() {
		const { title, image, instructions } = this.props;
		const ingr = this.props.ingredients.map((ing, index) => <li key={index}>{ing}</li>);
		return (
			<div className="recipe-card">
				<div className="recipe-card-image">
					<img src={image} alt="" />
				</div>
				<div className="recipe-card-content">
					<h3 className="recipe-title">{title}</h3>
					<h4>Ingredients:</h4>
					<ul>{ingr}</ul>
					<h4>Instructions:</h4>
					<p>{instructions}</p>
				</div>
			</div>
		);
	}
}

export default recipe;
