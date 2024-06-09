import express from "express";
import { createCheckoutPreference } from "../controllers/checkout.controller.js";

const route = express.Router();

route.post("/", createCheckoutPreference);

export default route;
