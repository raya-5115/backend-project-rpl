import express from "express";
import { create, deleteuser, getAllUsers, getUserById, update } from "../controller/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const userRoute = express.Router();

// Rute publik (untuk register)
userRoute.post("/user", create);

// Rute yang membutuhkan autentikasi
userRoute.get("/user/:id", verifyToken, getUserById);

// Rute yang membutuhkan role dosen atau mitra
userRoute.get("/users", verifyToken, checkRole(['dosen', 'mitra']), getAllUsers);

// Rute yang hanya bisa diakses oleh dosen
userRoute.put("/update/user/:id", verifyToken, checkRole(['dosen', 'mitra']), update);

// Rute yang hanya bisa diakses oleh mitra
userRoute.delete("/delete/user/:id", verifyToken, checkRole(['dosen', 'mitra']), deleteuser);

export default userRoute;

