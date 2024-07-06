import mongoose from "mongoose";

export const ConnectDB = async() => {
    // await mongoose.connect('mongodb+srv://blog:DDVkpSL31nzMAF9f@cluster0.nss4adm.mongodb.net/blog')
    await mongoose.connect('mongodb+srv://blog:DDVkpSL31nzMAF9f@cluster0.nss4adm.mongodb.net/?retryWrites=true&w=majority&blog=Cluster0')
    console.log("Database Connected");
}
