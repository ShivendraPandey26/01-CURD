import { Router } from "express";
import {
  handleGetReq,
  handlePostReq,
  handleGetReqById,
  handleDeleteReq,
  handlePatchReq,
} from "../controllers/userController.js";

const router = Router();

router
.route("/")
.post(handlePostReq)
.get(handleGetReq);

router
.route("/:id")
.get(handleGetReqById)
.delete(handleDeleteReq)
.patch(handlePatchReq);

export default router;
