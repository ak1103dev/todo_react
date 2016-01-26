import React from 'react';

export default class TodoItem extends React.Component {
	componentWillMount() {
		this.setState({
			checked: this.props.item.done
		});
	}
	onChange(e) {
		this.setState({
			checked: !this.state.checked
		})
	}
	render() {
		return (
			<li style={{
				textDecoration: this.state.checked ? "line-through": "none"
			}}>
				<label>
				<input
					type="checkbox"
					checked={this.state.check}
					onChange={this.onChange.bind(this)}
				/>
				{this.props.item.title}
				</label>
			</li>
		)
	}
}
