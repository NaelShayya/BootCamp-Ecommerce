import express from "express";
import bodyParser from "body-parser";
import './config/config.js'

const app = express();
app.use(express.json());