import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { UserType } from "../../projectTypes";
import { DBUser } from "../mongo";

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

// const users = [];

export async function createUser({ username, password, role, tel }: UserType) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user: UserType = {
    id: uuidv4(),
    createdAt: Date.now(),
    password,
    username,
    hash,
    salt,
    role,
    tel,
  };

  // This is an in memory store for users, there is no data persistence without a proper DB
  // users.push(user);

  // using the database now
  const saveduser = await new DBUser(user).save();
  console.log(["saveduser", saveduser]);

  return { username, createdAt: Date.now() };
}

// Here you should lookup for the user in your DB
export async function findUser({ username }: { username: string }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  // return users.find((user) => user.username === username);

  // use the database
  return DBUser.findOne<UserType>({ tel: username });
}

export async function getUser({ username }: { username: string }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  // return users.find((user) => user.username === username);

  // use the database
  return DBUser.findOne({ username: username }).select([
    "username",
    "_id",
    "role",
  ]);
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user: UserType, inputPassword: string) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.hash === inputHash;
  // const passwordsMatch = user.password === inputPassword;
  console.log(passwordsMatch);
  return passwordsMatch;
}
