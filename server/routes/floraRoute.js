import express from "express";
import { create, getAllFloras, update, deleteFlora } from "../controller/floraController.js"


const floraRoute = express.Router();

// Menambah data flora
floraRoute.post("/flora", create);

// Melihat data flora
floraRoute.get("/floras", getAllFloras);

// Mengubah data flora
floraRoute.put("/update/flora/:id", update);

// Menghapus data flora
floraRoute.delete("/delete/flora/:id", deleteFlora);

export default floraRoute;