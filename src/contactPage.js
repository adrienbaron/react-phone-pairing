import React from "react";
import ContactDetails from "./contactDetails";
import getResults from "./getResults";

class ContactPage extends React.Component {
  render() {
    var data = getResults(this.props.params.contact)[0];
    return <ContactDetails data={data} />;
  }
}

export default ContactPage;
