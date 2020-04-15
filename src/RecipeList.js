import React, { Component } from 'react';
import Recipe from './recipe';
import './RecipeList.css';

export default class RecipeList extends Component {
	static defaultProps = {
		recipes: [
			{
				title: 'pasta',
				ingredients: [ 'flour', 'water', 'shit' ],
				image: '1.jpeg',
				instructions: 'Mix Ingredients'
			},
			{
				title: 'pasta',
				ingredients: [ 'flour', 'water', 'shit' ],
				image: '2.jpeg',
				instructions: 'Mix Ingredients'
			},
			{
				title: 'pasta',
				ingredients: [ 'flour', 'water', 'shit' ],
				image: '3.jpeg',
				instructions: 'Mix Ingredients'
			}
		]
	};

	render() {
		const recipe = this.props.recipes.map((r, index) => <Recipe key={index} {...r} />);

		return <div className="recipe-list">{recipe}</div>;
	}
}
