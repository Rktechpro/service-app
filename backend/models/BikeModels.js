import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true, uinque: true },
  bikenumber: { type: String, required: true, unique: true },
  bikemodelNo: { type: String, required: true },
});
const BikeModel = mongoose.model("BikeService", bikeSchema);
export default BikeModel;
