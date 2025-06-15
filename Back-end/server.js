import 'dotenv/config'
import express from "express"
import cors from "cors"
import connectDB from "./config/DB.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// App config

const App = express()
const port = 4000

// Middleware

App.use(express.json())
App.use(cors())

// DB connection

connectDB()

// RestFull API

App.use("/api/food", foodRouter)

App.use("/images", express.static("uploads"))

App.use("/api/user", userRouter)

App.use("/api/cart", cartRouter)

App.use("/api/order",orderRouter)




App.get("/", (req,res) => {
    res.send("Working...")
})

App.listen(port, () => {
    console.log(`Server Started On http://localhost:${port}`)
})

