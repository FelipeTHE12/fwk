import express from "express";
import swaggerUi from "swagger-ui-express";
import SwaggerDocs from "./config/SwaggerDocs.json";
import { router } from "./routes";
import { ErrorHandler } from "./middlewares/ErrorHandler";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerDocs));

app.use(router);

app.use(ErrorHandler);

export { app };
