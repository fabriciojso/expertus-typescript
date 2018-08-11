import * as Yup from "yup";

export abstract class ORM<T> {
  public abstract getBlankObject(): T;

  public getValidation(): Yup.ObjectSchema<T> {
    const schema: Yup.ObjectSchema<T> = Yup.object();
    const shape = this.defineValidation();
    return schema.shape(shape);
  }

  protected abstract defineValidation(): {
    [field in keyof T]: Yup.Schema<T[field]>
  };
}
