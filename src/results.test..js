jest.dontMock('../scripts/results');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';


const Results = require('../scripts/results');

var resultData = {
	name: 'George Michael',
	phone: '0777777771'
};

describe('Results', () => {

	it('shows message only when no results are present', () => {

		var emptyResults = TestUtils.renderIntoDocument(<Results data={[]} />);
		var oneResult = TestUtils.renderIntoDocument(<Results data={[resultData]} />);
		var noResultsNode = TestUtils.findRenderedDOMComponentWithClass(emptyResults, 'results__none-msg');
		var notNoResultsNode = TestUtils.scryRenderedDOMComponentsWithClass(oneResult, 'results__none-msg');

		expect(TestUtils.isDOMComponent(noResultsNode)).toEqual(true);
		expect(notNoResultsNode.length).toEqual(0);
	});

	it('shows the same number of results as the data length', () => {

		var dataShort = Array(1).fill(resultData);
		var dataLong = Array(100).fill(resultData);

		var emptyResults = TestUtils.renderIntoDocument(<Results data={[]} />);
		var shortResults = TestUtils.renderIntoDocument(<Results data={dataShort} />);
		var longResults = TestUtils.renderIntoDocument(<Results data={dataLong} />);

		var emptyLiNodes = TestUtils.scryRenderedDOMComponentsWithTag(emptyResults, 'li');
		var shortLiNodes = TestUtils.scryRenderedDOMComponentsWithTag(shortResults, 'li');
		var longLiNodes = TestUtils.scryRenderedDOMComponentsWithTag(longResults, 'li');

		expect(emptyLiNodes.length).toEqual(0);
		expect(shortLiNodes.length).toEqual(1);
		expect(longLiNodes.length).toEqual(100);
	});

});
