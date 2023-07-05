import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import peopleRouter from "./routes/people";
import companiesRouter from "./routes/companies";
import sessionRouter from "./routes/session";
import { validateSession } from "./middlewares/session";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 8000;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/session", sessionRouter);

// Secured endpoints
app.use(validateSession);
app.use("/people", peopleRouter);
app.use("/companies", companiesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
