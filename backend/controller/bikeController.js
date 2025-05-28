import BikeModel from "../models/BikeModels.js";

const getAllbikes = (req, res) => {
  const { name, phone, bikenumber, bikemodelNo } = req.body;
  // Validate the input data
  if (!name || !phone || !bikenumber || !bikemodelNo) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Assuming BikeModel is imported from the models directory
  const bike = new BikeModel({ name, phone, bikenumber, bikemodelNo });
  try {
    bike
      .save()
      .then(() =>
        res.status(200).json({ message: "Bike  book is successfully" })
      )
      .catch((error) =>
        res.status(500).json({ message: "not booking is bike", error })
      );
  } catch (error) {
    console.error("Error saving bike:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export { getAllbikes };
