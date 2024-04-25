import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db-config.js";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import initializePassport from "./config/passport.js";
import authRoutes from "./routes/authRoutes.js";
import countryRoutes from "./routes/countryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js"
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Handle preflight requests
app.options("*", cors());

connectDB();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Configure Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
initializePassport(passport);

app.get("/", (req, res) => {
  res.send("Welcome to the root URL!");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api", countryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/contact", contactRoutes);

const port = process.env.PORT || 6001;
app.listen(port, () => console.log(`Server running on port ${port}`));
