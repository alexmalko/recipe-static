import React, { Component } from 'react';
import './Button.css';

const TodoItem = ({ text }) => <li>{text}</li>;

export default class button extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [], newTodo: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const todos = [ ...this.state.todos, this.state.newTodo ];
		this.setState({ todos, newTodo: '' });
	}

	render() {
		const { newTodo } = this.state;
		const todos = this.state.todos.map((t, i) => <TodoItem key={i} text={t} />);

		return (
			<div className="todo">
				<h1>Simple To Do App</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						autoComplete="off"
						type="text"
						name="newTodo"
						placeholder="what needs to be done"
						value={newTodo}
						onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
					/>
					<button type="submit">SAVE</button>
				</form>
				<div>
					<ol>{todos}</ol>
				</div>
			</div>
		);
	}
}
