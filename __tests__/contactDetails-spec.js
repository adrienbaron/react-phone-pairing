jest.dontMock("../scripts/contactDetails");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

const ContactDetails = require("../scripts/contactDetails");

describe("contactDetails", () => {
  it("prints first name correctly", () => {
    var testContact = {
      name: "John Doe",
      phone: "99999999"
    };
    var contactDetails = TestUtils.renderIntoDocument(
      <ContactDetails data={testContact} />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(contactDetails, "h2")
      .textContent;
    expect(title).toEqual("Contact details for: John");
  });
});
