import express from "express";
import { getImage } from "../controllers/images.controller.js";

const route = express.Router();

route.get("/:idImage", getImage);

export default route;
