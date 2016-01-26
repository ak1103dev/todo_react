import React from 'react';

export default class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ''
		};
	}
	onChange(e) {
		this.setState({value: e.target.value});
	}
	onKeyDown(e) {
		if (e.which === 13)	{
			this.props.onAdd(this.state.value);
			this.setState({value: ''});
		}
	}
	render() {
		return (
				<input type="text"
				value={this.state.value}
				onChange={this.onChange.bind(this) }
				onKeyDown={this.onKeyDown.bind(this)}
				autoFocus={true}
				/>
	    );
	}
}
