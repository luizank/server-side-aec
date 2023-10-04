import {
  DocumentType,
  Ref,
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
} from "@typegoose/typegoose";
import bcrypt from "bcryptjs";
import { User } from "../models/user.model";

@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})
export class Produto {
  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ required: true })
  codBarras: string;

  @prop({ required: true })
  descricao: string;

  @prop({ required: true })
  marca: string;

  @prop({ required: true })
  preco: number;

  @prop({ required: true, default: true })
  ativo: Boolean;
}

const produtoModel = getModelForClass(Produto);
export default produtoModel;
