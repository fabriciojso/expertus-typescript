import * as React from "react";
import { Fragment } from "react";
import { Container, Menu } from "semantic-ui-react";
import styled from "styled-components";

interface IProps {
  children: React.ReactElement<any> | React.ReactElement<any>[];
}

const MenuHeader = styled(Menu)`
  border-radius: 0px !important;
`;

const Content = styled(Container)`
  margin-top: 20px;
`;

const BaseTemplate = ({ children }: IProps) => (
  <Fragment>
    <MenuHeader inverted={true} size="huge">
      <Container>
        <Menu.Item name="home" link={true} />
      </Container>
    </MenuHeader>
    <Content>{children}</Content>
  </Fragment>
);

export default BaseTemplate;
