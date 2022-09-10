import mongoose, { Schema } from "mongoose";
import { MDoc } from "./models";

mongoose.connect("mongodb://localhost:27017/pcdb");

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

interface Comment {
  article: string;
  value: string;
  name: string;
}
const commentSchema = new Schema<Comment>({
  article: String,
  value: String,
  name: String,
});
export const MComment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

const docSchema = new Schema<MDoc>({
  name: String,
  tel: String,
  field: String,
  chapter: String,
  kind: String,
  files: [String],
  count: Number,
});

export const DBDoc =
  mongoose.models.DBDoc || mongoose.model("DBDoc", docSchema);

// a counter for the database
const counterSchema = new Schema({
  name: String,
  counter: { type: Number, default: 0 },
});

export const DBCounter =
  mongoose.models.DBCounter || mongoose.model("DBCounter", counterSchema);

// update the counter using the name of the collection
export async function updateCounter(nameCol: string): Promise<number> {
  // add the counter
  const pCounter =
    (await DBCounter.findOne({ name: nameCol })) ||
    (await new DBCounter({ name: nameCol }).save());
  const counter = pCounter.counter + 1;

  await DBCounter.updateOne({ name: nameCol }, { counter: counter });
  return counter;
}
