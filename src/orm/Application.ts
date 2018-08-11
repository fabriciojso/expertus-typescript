import * as Yup from "yup";
import { ORM } from "./Orm";

export interface IApplication {
  titulo: string;
  textoChamada: string;
  tituloShare: string;
  textoShare: string;
  imagemChamada: string;
  imagemListagem: string;
}

export class ApplicationORM extends ORM<IApplication> {
  getBlankObject() {
    return {
      titulo: "",
      textoChamada: "",
      tituloShare: "",
      textoShare: "",
      imagemChamada: "",
      imagemListagem: ""
    };
  }

  defineValidation() {
    return {
      titulo: Yup.string().required(),
      textoChamada: Yup.string().required(),
      tituloShare: Yup.string().required(),
      textoShare: Yup.string().required(),
      fundos: Yup.string().required(),
      imagemChamada: Yup.string().test({
        name: "max",
        exclusive: true,
        message:
          "Nenhuma imagem encontada ou tamanho da imagem incorreto (1200x630)",
        test: value => {
          const image = new Image();
          image.src = value;
          return image.width === 1200 && image.height === 630;
        }
      }),
      imagemListagem: Yup.string().test({
        name: "max",
        exclusive: true,
        message:
          "Nenhuma imagem encontada ou tamanho da imagem incorreto (600x400)",
        test: value => {
          const image = new Image();
          image.src = value;
          return image.width === 600 && image.height === 400;
        }
      })
    };
  }
}
