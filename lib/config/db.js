require('dotenv').config();
import mongoose from "mongoose";
const dbUser = process.env.DB_USERNAME
const dbPass = process.env.DB_PASSWORD

export const ConnectDB = async() => {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.nss4adm.mongodb.net/blog-app`)
    console.log("Database Connected");
}
