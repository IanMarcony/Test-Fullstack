import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-error";
import AppError from "./errors/AppError";

import routes from "./routes";
import "./database";

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(PORT, () =>
  console.log("🚀 Catálogo Server is Running at htpp://localhost:3333/")
);
