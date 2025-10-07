import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Product = db.define('products',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

// import mongoose from "mongoose"

// const productSchema = new  mongoose.Schema({
//     name:{
//         type:String
//     },
//     price:{
//         type:Number
//     },
//     category:{
//         type:String
//     },
//     stock:{
//         type:Number
//     }
// })

// const Product = mongoose.model("product",productSchema)

export default Product