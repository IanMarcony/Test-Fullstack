import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import AppError from "./errors/AppError";
import cors from "cors";

import routes from "./routes";
// import "./database";

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: "error", message: err.message });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(PORT, () =>
  console.log("🚀 Catálogo Server is Running at htpp://localhost:3333/")
);
