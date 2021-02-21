import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import routes from "./routes";
import cors from "cors";

import AppError from "./errors/AppError";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
  console.log(err.message)
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(PORT, () =>
  console.log(`🚀 Recomendacao Server is Running at htpp://localhost:${PORT}/`)
);
