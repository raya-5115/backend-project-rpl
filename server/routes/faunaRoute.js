import express from "express";
import { create, getAllFaunas, update } from "../controller/faunaController.js"


const faunaRoute = express.Router();

// Menambah data fauna
faunaRoute.post("/fauna", create);

// Melihat data fauna
faunaRoute.get("/faunas", getAllFaunas);

// Mengubah data fauna
faunaRoute.put("/update/fauna/:id", update);

export default faunaRoute;