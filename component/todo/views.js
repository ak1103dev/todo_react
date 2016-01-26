import React from 'react';
import TodoList from '../todolist';
import TodoInput from '../todoinput';

export default class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: [
				{title: "Hello1" ,done: false},
				{title: "Hello2" ,done: false},
				{title: "Hello3" ,done: false},
				{title: "Hello4" ,done: false},
			]
		};
	}
	onAdd(title) {
		this.state.todo.push({
			title: title,
			done: false
		});
		this.setState({todo: this.state.todo});
	}
	render() {
		return (
				<div>
					<TodoInput onAdd={this.onAdd.bind(this)} />
					<TodoList todo={this.state.todo} />
				</div>
		);
	}
}
