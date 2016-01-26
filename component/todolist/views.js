import React from 'react';
import TodoItem from '../todoitem';

export default class TodoList extends React.Component {
	render() {
		let todoElements = this.props.todo.map((element, id) => {
			return <TodoItem key={id} item={element} />
		});
		return (
				<div>{todoElements}</div>
		);
	}
}
