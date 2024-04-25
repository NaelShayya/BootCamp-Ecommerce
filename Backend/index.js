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

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
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

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api", countryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/payment", paymentRoutes);

const port = process.env.PORT || 6001;
app.listen(port, () => console.log(`Server running on port ${port}`));
