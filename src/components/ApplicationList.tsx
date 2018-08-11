import * as React from "react";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Header,
  Icon,
  Input,
  Modal,
  Segment,
  Table
} from "semantic-ui-react";

interface IProps {
  items: Array<{
    id: number;
    titulo: string;
  }>;
}

interface IState {
  isOpenModalDelete: boolean;
  isOpenModalPublish: boolean;
  dateValue: Date;
  idPublish: number | null;
}

class ApplicationList extends Component<IProps, IState> {
  public static defaultProps = {
    items: []
  };

  public state = {
    isOpenModalDelete: false,
    isOpenModalPublish: true,
    dateValue: new Date(),
    idPublish: null
  };

  public render() {
    return (
      <Fragment>
        <Header
          as="h2"
          dividing={true}
          attached="top"
          content={
            <Fragment>
              Lista de aplicativos
              <Button
                content="Novo Aplicativo"
                color="green"
                floated="right"
                icon="add"
                as={Link}
                to="/application/add"
              />
            </Fragment>
          }
        />
        <Segment attached={true}>
          <Table basic="very" celled={true} compact={true}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Título</Table.HeaderCell>
                <Table.HeaderCell>Divulgar</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.props.items.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.titulo}</Table.Cell>
                  <Table.Cell>
                    <Input
                      action={{
                        color: "blue",
                        content: "Divulgar",
                        icon: "facebook",
                        labelPosition: "right"
                      }}
                      size="mini"
                      placeholder="Data/hora"
                      type="datetime-local"
                      defaultValue={this.state.dateValue.toJSON().slice(0, 19)}
                    />
                  </Table.Cell>

                  <Table.Cell textAlign="right">
                    <Button.Group>
                      <Button basic={true} color="green" icon="pencil" />
                      <Button basic={true} color="red" icon="trash" />
                    </Button.Group>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Segment>
        <Modal open={this.state.isOpenModalDelete} basic={true} size="tiny">
          <Header icon="archive" content="Tem certeza que deseja deletar?" />
          <Modal.Content>
            <p>
              Após a confirmação não será mais possível reverter este processo!
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic={true} color="red" inverted={true}>
              <Icon name="remove" />
              Cancelar
            </Button>
            <Button color="green" inverted={true}>
              <Icon name="checkmark" />
              Confirmar
            </Button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    );
  }
}

export default ApplicationList;
