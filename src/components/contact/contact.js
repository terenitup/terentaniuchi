import React, { Component } from "react";
import Form from "./form";


class Contact extends Component {

  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
  };

  render() {
    return (
      <div>
        <h1>CONTACT</h1>

        <Form onSubmit={fields => this.onSubmit(fields)} />

        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>

      </div>
    );
  } 
}

export default Contact;