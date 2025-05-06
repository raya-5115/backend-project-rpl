// Import Library
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"

// Import Route data
import userRoute from "./server/routes/userRoute.js"
import authRoute from "./server/routes/authRoute.js"
import faunaRoute from "./server/routes/faunaRoute.js"
import tamanRoute from "./server/routes/tamanRoute.js"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(()=>{
    console.log("DB connected successfully.");
    app.listen(PORT,()=>{
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/api", userRoute);
app.use("/api/auth", authRoute);
app.use("/api", faunaRoute);
app.use("/api", tamanRoute);