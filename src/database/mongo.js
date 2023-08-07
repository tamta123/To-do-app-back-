import mongoose from "mongoose";
// import dotenv from "dotenv";

const connect = () => {
  try {
    const url = process.env.MONGO_URL;
    mongoose.connect(url);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
