import * as React from "react";
import { Component } from "react";
import { Form, Segment } from "semantic-ui-react";

class ApplicationForm extends Component {
  render() {
    return (
      <Segment>
        <Form>
          <Form.Group widths="4">
            <Form.Input
              fluid={true}
              id="form-subcomponent-shorthand-input-first-name"
              label="First name"
              placeholder="First name"
            />
            <Form.Input
              fluid={true}
              id="form-subcomponent-shorthand-input-last-name"
              label="Last name"
              placeholder="Last name"
            />
            <Form.Input
              fluid={true}
              id="form-subcomponent-shorthand-input-last-name"
              label="Last name"
              placeholder="Last name"
            />
            <Form.Input
              fluid={true}
              id="form-subcomponent-shorthand-input-last-name"
              label="Last name"
              placeholder="Last name"
            />
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

export default ApplicationForm;
