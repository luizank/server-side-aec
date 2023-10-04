import mongoose from "mongoose";
import { array, number, object, string, TypeOf } from "zod";

export const getProductSchema = object({
  params: object({
    idProduto: string({ required_error: "idProduto is required" }),
  }).refine((data) => isValidObjectId(data.idProduto) === true, {
    message: "idProduto is invalid",
    path: ["idProduto"],
  }),
});

export const createProductSchema = object({
  body: object({
    codBarras: string({ required_error: "codBarras is required" }),
    descricao: string({ required_error: "descricao is required" }),
    marca: string({ required_error: "marca is required" }),
    preco: number({ required_error: "preco is required" }),
  }),
});

export const updateProductSchema = object({
  params: object({
    idProduto: string({ required_error: "idProduto is required" }),
  }).refine((data) => isValidObjectId(data.idProduto) === true, {
    message: "idProduto is invalid",
    path: ["idProduto"],
  }),
  body: object({
    codBarras: string({ required_error: "codBarras is required" }),
    descricao: string({ required_error: "descricao is required" }),
    marca: string({ required_error: "marca is required" }),
    preco: number({ required_error: "preco is required" }),
  }),
});

export const deleteProductSchema = object({
  params: object({
    idProduto: string({ required_error: "idProduto is required" }),
  }).refine((data) => isValidObjectId(data.idProduto) === true, {
    message: "idProduto is invalid",
    path: ["idProduto"],
  }),
});

export function isValidObjectId(adId: string) {
  // Cria variável para operação
  return mongoose.Types.ObjectId.isValid(adId);
}

export type CreateProductSchema = TypeOf<typeof createProductSchema>["body"];
export type UpdateProductSchema = TypeOf<typeof updateProductSchema>["body"];
