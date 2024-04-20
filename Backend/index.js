import express from "express";
import bodyParser from "body-parser";
import "./config/config.js";
import Role from "./models/Role.js";

const app = express();
app.use(express.json());

console.log("role", Role);
