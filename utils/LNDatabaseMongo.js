import mongoose from "mongoose";
import LNDatabase from "./LNDatabase";
import Prompt from "@models/prompt";

class LNDatabaseMongo extends LNDatabase {
  constructor(URI, dbName) {
    super(URI, dbName);
  }

  async connect() {
    mongoose.set("strictQuery", true);

    if (this.isConnected) {
      console.log("MongoDB is already connected");
      return;
    }

    try {
      await mongoose.connect(this.URI, {
        dbName: this.dbName,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      this.isConnected = true;

      console.log("MongoDB connected");
    } catch (error) {
      console.log(error);
    }
  }

  async find() {
    const response = await Prompt.find({}).populate("creator");

    return response;
  }
}

export default LNDatabaseMongo;
