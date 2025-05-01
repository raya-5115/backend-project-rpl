import express from "express";
import { create, update, deleteTamanNasional } from "../controller/tamanController.js"

import { verifyToken } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const tamanRoute = express.Router();

// Menambah data taman
tamanRoute.post("/taman", create);

// Mengubah data taman
tamanRoute.put("/update/taman/:id", update);

// Menghapus data taman
tamanRoute.delete("/delete/taman/:id",  checkRole(['mitra']), deleteTamanNasional);

export default tamanRoute; 