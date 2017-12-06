import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		var input = ReactDOM.findDOMNode(this.refs.input);
		if (this.props.onSubmit) {
			this.props.onSubmit(input.value);
		}
	}

	render() {
		return (
			<form className="search-box" onSubmit={this.onSubmit}>
				<input type="text" placeholder="Search for contacts" ref="input" defaultValue={this.props.currentSearch} />
				<button type="submit" ref="submitBtn">Search</button>
			</form>
		);
	}
}

export default SearchBox;
