import express from "express";
import bodyParser from "body-parser";
import "./config/config.js";
import Role from "./models/Role.js";
import Country from "./models/Country.js";
import Currency from "./models/Currency.js";

const app = express();
app.use(express.json());

console.log("role", Role);
console.log("country", Country);
console.log("currency", Currency);
