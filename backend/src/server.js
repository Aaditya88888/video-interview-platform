import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8"]);

import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";

const app = express();

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello from the server side" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is healthy and running fine" });
});

if (ENV.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  await connectDB();
  try {
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.log("💥 Error starting the server", error);
  }
};

startServer();
