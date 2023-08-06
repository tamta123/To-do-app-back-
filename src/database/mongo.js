import mongoose from "mongoose";
// import dotenv from "dotenv";

const connect = () => {
  try {
    const url = process.env.MONGO_URL;
    mongoose.connect(url || "");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
