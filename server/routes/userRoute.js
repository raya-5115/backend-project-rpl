import express from "express"

import { create, deleteuser, getAllUsers, getUserById, update } from "../controller/userController.js"

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", update);
Router.delete("/delete/user/:id", deleteuser);

export default route;

