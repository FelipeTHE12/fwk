import express from "express";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import { router } from "./routes";
import "express-async-errors";

const app = express();
app.use(express.json());

app.use(router);

app.use(ErrorHandler);

export { app };
