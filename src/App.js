import React from 'react';
import Recipe from './recipe';
import Navbar from './navbar';
import RecipeList from './RecipeList';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<RecipeList />
		</div>
	);
}

export { App };
