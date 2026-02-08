import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const url = process.env.MONGODB_URI;

    if (!url) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    const connectionInstance = await mongoose.connect(
      `${url}/${DB_NAME}`
    );

    console.log(
      `✅ MongoDB connected successfully: ${connectionInstance.connection.host}`
    );

  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDb;
