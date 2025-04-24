import express from "express"
import { create, deleteuser, getAllUsers, getUserById, update } from "../controller/userController.js"

const userRoute = express.Router();

userRoute.post("/user", create);
userRoute.get("/users", getAllUsers);
userRoute.get("/user/:id", getUserById);
userRoute.put("/update/user/:id", update);
userRoute.delete("/delete/user/:id", deleteuser);

export default userRoute;

