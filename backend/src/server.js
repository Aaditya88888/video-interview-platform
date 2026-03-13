import express from "express";
import { ENV } from "./lib/env.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello from the server side" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is healthy and running fine" });
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
