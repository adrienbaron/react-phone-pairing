import React from "react";
import { shallow } from "enzyme";

import ContactDetails from "./contactDetails";

describe("contactDetails", () => {
  it("prints first name correctly", () => {
    var testContact = {
      name: "John Doe",
      phone: "99999999"
    };
    var contactDetails = shallow(<ContactDetails data={testContact} />);

    var title = contactDetails.find("h2").text();

    expect(title).toEqual("Contact details for: John");
  });
});
