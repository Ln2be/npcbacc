import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017/passport");

interface TSUser {
  id: string;
  createdAt: Date;
  username: string;
  hash: string;
  salt: string;
  password: string;
  role: string;
  //   _id?: string;
}

const userSchema = new Schema<TSUser>({
  id: String,
  createdAt: Date,
  username: String,
  hash: String,
  salt: String,
  password: String,
  role: String,
});

export const DBUser =
  mongoose.models.DBUser || mongoose.model("DBUser", userSchema);
