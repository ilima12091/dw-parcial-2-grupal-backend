import { Router } from "express";
import { validUsers } from "../utils/globals";
import jwt from "jsonwebtoken";

const sessionRouter = Router();

sessionRouter.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ message: "Bad request" });

  const user = validUsers.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const token = jwt.sign(
    {
      username: user.username,
    },
    process.env.JWT_SECRET as string, // Secret en el readme
    {
      expiresIn: "1h",
    }
  );

  res.cookie("SESSION", token, {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60,
  });

  res.json({
    message: "Logged in",
  });
});

export default sessionRouter;
