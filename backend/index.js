import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { dbConnect } from "./config/Db.js";
import bikeRouter from "./Routes/bikeRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/bike", bikeRouter);

app.get("/", (req, res) => {
  res.send("<h1>welcome to bharat auto service</h1>");
});
dbConnect();

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};
startServer();
