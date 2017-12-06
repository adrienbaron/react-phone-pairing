jest.autoMockOff()
jest.setMock('../scripts/data', [{
	"name": "George Michael",
	"phone": "0777777771"
},
{
	"name": "John Smith",
	"phone": "0777777772"
},
{
	"name": "Sue Perkins",
	"phone": "0777777773"
},
{
	"name": "Tim Cook",
	"phone": "077777774"
}]);

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const SearchContacts = require('../scripts/searchContacts');
const data = require('../scripts/data');

describe('searchContacts', () => {

	it('does not show results until first search', () => {
		var search = TestUtils.renderIntoDocument(<SearchContacts />);
		var resultsNode = TestUtils.scryRenderedDOMComponentsWithClass(search, 'results');
		var formNode = TestUtils.findRenderedDOMComponentWithTag(search, 'form');
		var searchInputNode = TestUtils.findRenderedDOMComponentWithTag(search, 'input');

		expect(resultsNode.length).toEqual(0);

    searchInputNode.value = 'perkins';

    TestUtils.Simulate.submit(formNode);
    resultsNode = TestUtils.scryRenderedDOMComponentsWithClass(search, 'results');
		expect(resultsNode.length).toEqual(1);
	});

	it('returns all on empty search', () => {
		var search = TestUtils.renderIntoDocument(<SearchContacts />);
    var formNode = TestUtils.findRenderedDOMComponentWithTag(search, 'form');

    TestUtils.Simulate.submit(formNode);
    var liNodes = TestUtils.scryRenderedDOMComponentsWithTag(search, 'li');
		expect(liNodes.length).toEqual(data.length);
	});

	it('can find George Michael', () => {
		var search = TestUtils.renderIntoDocument(<SearchContacts />);
    var formNode = TestUtils.findRenderedDOMComponentWithTag(search, 'form');
		var searchInputNode = TestUtils.findRenderedDOMComponentWithTag(search, 'input');
    searchInputNode.value = 'George Michael';
    TestUtils.Simulate.submit(formNode);
    var liNodes = TestUtils.scryRenderedDOMComponentsWithTag(search, 'a');
		expect(liNodes[0].textContent).toEqual('George Michael');
	});

});
