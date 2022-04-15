import { getUser } from "../../../lib/auth/user";
import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";

const TOKEN_NAME = "token";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sessionS = getLoginSession(req);

    const session = JSON.parse(sessionS || "");

    const user =
      (session && (await getUser({ username: session.username }))) ?? null;

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).end("Authentication token is invalid, please log in");
  }
}

function getLoginSession(req: NextApiRequest) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) {
    const cookes1 = req.cookies;
  }

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  const cookies = parse(cookie || "");

  const token = cookies[TOKEN_NAME];

  if (!token) return;

  return token;
}
