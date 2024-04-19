import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

    /*ADD DATA ONCE*/
   // User.insertMany(users);
   // Post.insertMany(posts);
})
.catch((error) => console.log(`Error connecting to MongoDB:`, error));