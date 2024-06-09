import express from "express";
import {
    createCart,
    editCart,
    getById,
} from "../controllers/cart.controller.js";

const route = express.Router();

route.post("/", createCart).get("/get/:id", getById).put("/edit/:id", editCart);

export default route;
