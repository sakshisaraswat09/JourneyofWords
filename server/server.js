import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import bodyParser from "body-parser";

import Connection from "./database/db.js";

import router from "./routes/route.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build/index.html"))
);
const PORT = 8000;

app.listen(PORT, () =>
  console.log(
    `Server is running successfully on Port ${PORT} Helloooo Everyone!`
  )
);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
