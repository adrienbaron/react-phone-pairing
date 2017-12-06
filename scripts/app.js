import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="app-wrapper">
				<h1>ACME Contact Directory</h1>
				{this.props.children}
			</div>
		)
	}
};

export default App;
