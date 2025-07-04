import express from 'express'
import authMidlleware from '../middleware/authenticate.js'
import { placeOrder,verifyOrder,userOrders,listOrders,updateStatus } from '../controllers/orderController.js'


const orderRouter = express.Router()

orderRouter.post("/place",authMidlleware,placeOrder)

orderRouter.post("/verify",verifyOrder)

orderRouter.post("/userorders",authMidlleware,userOrders)

orderRouter.get("/list",listOrders)

orderRouter.post("/status",updateStatus)

export default orderRouter