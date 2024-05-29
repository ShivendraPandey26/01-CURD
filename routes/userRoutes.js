import { Router } from "express";
import user from "../models/user.schema.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await user.create({
      Name: name,
      Email: email,
    });
    res.send({ message: "success", user: result });
  } catch (error) {
    res.status(500).send({ message: "Error creating user", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await user.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

export default router;
