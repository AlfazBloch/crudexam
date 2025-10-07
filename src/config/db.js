// import mongoose from "mongoose";
import { Sequelize } from "sequelize";

const db = new Sequelize("mca","root","",{
    host:'localhost',
    dialect:"mysql"
})

// const connectDB = async ()=>{
//     await mongoose.connect("mongodb://localhost:27017")
// }


export default db
// export default connectDB