import React from "react";
import { mount } from "enzyme";

jest.setMock("./data", [
  {
    name: "George Michael",
    phone: "0777777771"
  },
  {
    name: "John Smith",
    phone: "0777777772"
  },
  {
    name: "Sue Perkins",
    phone: "0777777773"
  },
  {
    name: "Tim Cook",
    phone: "077777774"
  }
]);

const SearchContacts = require("./searchContacts").default;
const data = require("./data");

describe("searchContacts", () => {
  it("does not show results until first search", () => {
    var search = mount(<SearchContacts />);
    var resultsNode = search.find("results");
    var formNode = search.find("form");
    var searchInputNode = search.find("input").getDOMNode();

    expect(resultsNode.length).toEqual(0);

    searchInputNode.value = "perkins";

    formNode.simulate("submit");
    resultsNode = search.find(".results");
    expect(resultsNode.exists()).toEqual(true);
  });

  it("returns all on empty search", () => {
    var search = mount(<SearchContacts />);
    var formNode = search.find("form");

    formNode.simulate("submit");
    var liNodes = search.find("li");
    expect(liNodes.length).toEqual(data.length);
  });

  it("can find George Michael", () => {
    var search = mount(<SearchContacts />);
    var formNode = search.find("form");
    var searchInputNode = search.find("input").getDOMNode();
    searchInputNode.value = "George Michael";
    formNode.simulate("submit");
    var liNodes = search.find("a");
    expect(liNodes.first().text()).toEqual("George Michael");
  });
});
