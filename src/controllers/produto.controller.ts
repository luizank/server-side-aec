import { NextFunction, Request, Response } from "express";
import {
  findAllProducts,
  findProduct,
  createProduct,
  updateProduct,
  inactivateProduct,
} from "../services/produto.service";

export const getAllProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await findAllProducts();
    console.log(products);
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await findProduct(req.params.idProduto);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.user = res.locals.user;
    const product = await createProduct(req.body);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.user = res.locals.user;
    const product = await updateProduct(req.params.idProduto, req.body);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await inactivateProduct(req.params.idProduto, {
      ativo: false,
      user: res.locals.user,
    });
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
