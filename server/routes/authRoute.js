import express from "express";
import { loginUser, register } from "../controller/authController.js";

const authRoute = express.Router();

authRoute.post("/register", register);
authRoute.post("/login", loginUser);

export default authRoute; 