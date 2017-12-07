import React from "react";
import { mount } from "enzyme";

import SearchBox from "./searchBox";

describe("SearchBox", () => {
  it("populates input with initial", () => {
    var searchBox = mount(<SearchBox currentSearch="last search" />);

    var searchInputNode = searchBox
      .find("input")
      .first()
      .getDOMNode();

    expect(searchInputNode.value).toEqual("last search");
  });

  it("calls callback on submit", () => {
    var testCb = jasmine.createSpy("testCb");

    var searchBox = mount(<SearchBox onSubmit={testCb} />);
    var searchInputNode = searchBox
      .find("input")
      .first()
      .getDOMNode();
    var form = searchBox.find("form");

    expect(testCb).not.toHaveBeenCalled();

    searchInputNode.value = "value";
    form.simulate("submit");
    expect(testCb).toHaveBeenCalled();
  });
});
