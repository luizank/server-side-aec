import { omit, get } from "lodash";
import { FilterQuery, QueryOptions } from "mongoose";
import config from "config";
import produtoModel, { Produto } from "../models/produto.model";
import { excludedFields } from "../controllers/auth.controller";
import { signJwt } from "../utils/jwt";
import redisClient from "../utils/connectRedis";
import { DocumentType } from "@typegoose/typegoose";

export const findAllProducts = async () => {
  return await produtoModel.find();
};

export const findProduct = async (parIdProduto: string) => {
  return await produtoModel.findById(parIdProduto);
};

export const createProduct = async (input: Partial<Produto>) => {
  return await produtoModel.create(input);
};

export const updateProduct = async (
  parIdProduto: string,
  input: Partial<Produto>
) => {
  await produtoModel.findByIdAndUpdate(parIdProduto, input);
  return await produtoModel.findById(parIdProduto);
};

export const inactivateProduct = async (
  parIdProduto: string,
  setFields: any
) => {
  //return await produtoModel.findByIdAndDelete(parIdProduto);
  await produtoModel.findByIdAndUpdate(parIdProduto, setFields);
  return await produtoModel.findById(parIdProduto);
};
