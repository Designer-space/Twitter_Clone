import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import connectMongoDB from "./connectMongoDB.js";

const PORT = process.env.PORT || 5000

dotenv.config()

const app = express()

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectMongoDB()
})