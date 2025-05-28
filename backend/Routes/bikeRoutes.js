import express from "express";
import { getAllbikes } from "../controller/bikeController.js";

const bikeRouter = express.Router();

bikeRouter.post("/booking", getAllbikes);

export default bikeRouter;
