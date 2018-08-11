import * as React from "react";
import { Fragment } from "react";

import { Form, InputProps, Image, Message } from "semantic-ui-react";
import styled from "styled-components";

interface IProps extends InputProps {
  setFieldValue: any;
  image?: string;
  msgError?: any;
}

const Field = styled(Form.Field)`
  img {
    margin-top: 20px;
  }
`;

export default class ImageFileInput extends React.Component<IProps> {
  state = {
    image: undefined
  };

  componentWillMount() {
    if (this.props.value) {
      this.props.setFieldValue(this.props.name, this.props.value);
    }
  }

  handleChangeUpload = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files || [];
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          image: reader.result
        });
        this.props.setFieldValue(this.props.name, reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  render() {
    const {
      setFieldValue,
      value,
      limitHeight,
      limitWidth,
      name,
      msgError,
      ...inputProps
    } = this.props;

    return (
      <Fragment>
        <Field>
          <Form.Input
            {...inputProps}
            fluid={true}
            type="file"
            onChange={this.handleChangeUpload}
          />
          {this.props.error &&
            msgError && <Message color="red" header={msgError} />}
          {value && <Image size="medium" bordered={true} src={value} />}
          <Form.Input type="hidden" name={name} value={value} />
        </Field>
      </Fragment>
    );
  }
}
