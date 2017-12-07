import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Results from "./results";

var resultData = {
  name: "George Michael",
  phone: "0777777771"
};

describe("Results", () => {
  it("shows message only when no results are present", () => {
    var emptyResults = shallow(<Results data={[]} />);
    var oneResult = shallow(<Results data={[resultData]} />);
    var noResultsNode = emptyResults.find(".results__none-msg");
    var notNoResultsNode = oneResult.find(".results__none-msg");

    expect(noResultsNode.exists()).toEqual(true);
    expect(notNoResultsNode.exists()).toEqual(false);
  });

  it("shows the same number of results as the data length", () => {
    var dataShort = Array(1).fill(resultData);
    var dataLong = Array(100).fill(resultData);

    var emptyResults = shallow(<Results data={[]} />);
    var shortResults = shallow(<Results data={dataShort} />);
    var longResults = shallow(<Results data={dataLong} />);

    var emptyLiNodes = emptyResults.find("li");
    var shortLiNodes = shortResults.find("li");
    var longLiNodes = longResults.find("li");

    expect(emptyLiNodes.length).toEqual(0);
    expect(shortLiNodes.length).toEqual(1);
    expect(longLiNodes.length).toEqual(100);
  });
});
