const MONGO_URI =
  "mongodb+srv://admin:nff123.@nextjs-neuefischefriend.jm4xz77.mongodb.net/?retryWrites=true&w=majority";
import mongoose, { mongo } from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (error) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
