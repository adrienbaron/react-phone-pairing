jest.dontMock('../scripts/searchBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';


const SearchBox = require('../scripts/searchBox');

describe('SearchBox', () => {

  it('populates input with initial', () => {

    var searchBox = TestUtils.renderIntoDocument(
    	<SearchBox currentSearch="last search" />
    );

    var searchInputNode = ReactDOM.findDOMNode(searchBox.refs.input);

    expect(searchInputNode.value).toEqual('last search');
  });


  it('calls callback on submit', () => {
  	var testCb = jasmine.createSpy('testCb');

    var searchBox = TestUtils.renderIntoDocument(
      <SearchBox onSubmit={testCb} />
    );
    var searchInputNode = ReactDOM.findDOMNode(searchBox.refs.input);
    var form = TestUtils.findRenderedDOMComponentWithTag(searchBox, 'form');

    expect(testCb).not.toHaveBeenCalled();

    searchInputNode.value = 'value';
    TestUtils.Simulate.submit(form);
    expect(testCb).toHaveBeenCalled();
  });

});
