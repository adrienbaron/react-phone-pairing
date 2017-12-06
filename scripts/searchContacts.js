import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './searchBox';
import Results from './results';
import getResults from './getResults';

class SearchContacts extends React.Component {
	constructor(props) {
		super(props);
		var searchActive = props.currentSearch !== undefined;
		this.state = {
			currentSearch: searchActive ? props.currentSearch : '',
			results: searchActive ? getResults(props.currentSearch) : [],
			searchActive: searchActive
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(searchStr) {
		if (this.state.currentSearch !== searchStr || !this.state.searchActive) {
			this.setState({ searchActive: true, currentSearch: searchStr, results: getResults(searchStr) });
		}
	}

	render() {
		return (
			<section>
				<SearchBox onSubmit={this.onSubmit} />
				{this.state.searchActive ? <Results data={this.state.results}  />: ''}
			</section>
		);
	}
}

export default SearchContacts;
