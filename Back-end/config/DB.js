import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatStack:3haIlfw6HoUgFwoI@cluster0.m0rr8mg.mongodb.net/food-delivery')

    .then(() => {console.log('DB connected !!!')})
}

export default connectDB