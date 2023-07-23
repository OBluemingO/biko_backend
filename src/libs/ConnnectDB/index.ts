import mongoose from "mongoose";

type URI = string | undefined  

export async function ConnectDB() {
  try {
    const MONGODB_URI: URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      console.error( "MongoDB connection string is missing in environment variables");
      process.exit(1);
    }

    if (typeof MONGODB_URI === "string") {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

// export default ConnectDB;
