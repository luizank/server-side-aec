import express from "express";
import {
  getAllUsersHandler,
  getMeHandler,
  mensagemUserHandler
} from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";
import { validate } from "../middleware/validate";
import { mensagemUserSchema } from "../schema/user.schema";

const router = express.Router();

router.use(deserializeUser, requireUser);

// Admin Get Users route
router.get("/", restrictTo("admin"), getAllUsersHandler);
router.get("/mensagem", validate(mensagemUserSchema), mensagemUserHandler)

// Get my info route
router.get("/me", getMeHandler);

export default router;
