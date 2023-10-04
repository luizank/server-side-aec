import express from "express";
import {
  getAllProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/produto.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
} from "../schema/produto.schema";

const router = express.Router();
router.use(deserializeUser, requireUser);

router.get("/", requireUser, getAllProductsController);
router.get("/:idProduto", validate(getProductSchema), getProductController);
router.post("/", validate(createProductSchema), createProductController);
router.put(
  "/:idProduto",
  validate(updateProductSchema),
  updateProductController
);
router.delete(
  "/:idProduto",
  validate(deleteProductSchema),
  deleteProductController
);

export default router;
