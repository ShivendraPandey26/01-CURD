import { Router } from "express";
import { handleHomepage } from "../controllers/userController.js";

const homeRouter = Router();
homeRouter.get("/", handleHomepage);

export default homeRouter;