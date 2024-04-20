import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
})
.catch((error) => console.log(`Error connecting to MongoDB:`, error));