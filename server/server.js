// server.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";

import "./connection.js";

import itemRoutes from "./routes/items.js";

const app = express();
const port = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Routing for api - will go here to write specific data endpoints
itemRoutes(app);
