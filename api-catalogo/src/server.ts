import express from "express";
// import "express-async-error";

import routes from "./routes";
import "./database";

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(routes);

app.listen(PORT, () =>
  console.log("🚀 Catálogo Server is Running at htpp://localhost:3333/")
);
