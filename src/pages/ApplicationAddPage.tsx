import * as React from "react";
import { Component } from "react";
import { FormikProps, withFormik } from "formik";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { IApplication, ApplicationORM } from "../orm/Application";
import BaseTemplate from "../components/templates/BaseTemplate";
import ImageFileInput from "../components/commons/form/ImageFileInput";

interface IProps extends FormikProps<IApplication> {}

class ApplicationAddPage extends Component<IProps> {
  render() {
    const {
      handleSubmit,
      values,
      handleChange,
      handleBlur,
      touched,
      errors,
      setFieldValue
    } = this.props;

    return (
      <BaseTemplate>
        <Form onSubmit={handleSubmit}>
          <Segment>
            <Header
              as="h3"
              dividing={true}
              icon="sticky note outline"
              content="Dados Básicos"
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid={true}
                label="Título"
                placeholder="Título do aplicativo"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.titulo && errors.titulo)}
              />
              <Form.Input
                fluid={true}
                label="Texto de chamada"
                placeholder="Texto de chamada"
                name="textoChamada"
                value={values.textoChamada}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.textoChamada && errors.textoChamada)}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="Título de share"
                placeholder="Título do share"
                name="tituloShare"
                value={values.tituloShare}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.tituloShare && errors.tituloShare)}
              />
              <Form.Input
                label="Texto de share"
                placeholder="Texto de share"
                name="textoShare"
                value={values.textoShare}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.textoShare && errors.textoShare)}
              />
            </Form.Group>
          </Segment>

          <Segment>
            <Header
              as="h3"
              dividing={true}
              icon="picture"
              content="Imagens Principais"
            />
            <Form.Group widths="equal">
              <ImageFileInput
                label="Imagem de Listagem (600x400)"
                name="imagemListagem"
                accept="image/*"
                setFieldValue={setFieldValue}
                value={values.imagemListagem}
                error={Boolean(touched.imagemListagem && errors.imagemListagem)}
                msgError={errors.imagemListagem}
              />
              <Form.Field>
                <ImageFileInput
                  label="Imagem de chamada (1200x630)"
                  name="imagemChamada"
                  accept="image/*"
                  setFieldValue={setFieldValue}
                  value={values.imagemChamada}
                  msgError={errors.imagemChamada}
                  error={Boolean(touched.imagemChamada && errors.imagemChamada)}
                />
              </Form.Field>
            </Form.Group>
          </Segment>

          <Button type="submit" fluid={true} primary={true} size="large">
            Salvar Aplicativo
          </Button>
        </Form>
      </BaseTemplate>
    );
  }
}
const applicationORM = new ApplicationORM();

export default withFormik({
  validationSchema: applicationORM.getValidation(),
  mapPropsToValues: () => applicationORM.getBlankObject(),
  handleSubmit: (values, wrapper) => {
    wrapper.setErrors({});
    wrapper.setSubmitting(true);
    console.log(values);
  }
})(ApplicationAddPage);
