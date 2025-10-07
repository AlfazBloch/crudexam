import Product from "../models/product.model.js"

const createProduct = async (req,res)=>{
    const product =  await Product.create(req.body)

    await product.save()

    res.json({message:"Inserted successfully",product})
}

const getProducts = async (req,res)=>{
    const products = await Product.findAll()

    res.json({message:"Product List",products})

}

const getProduct = async (req,res)=>{
    const {id} = req.params
    const product = await Product.findByPk(id)

    res.json({message:"Product found successfully",product})

}

const updateProduct = async (req,res)=>{
    const {id} = req.params
    const product = await Product.update(req.body,{where:{id}})

    // product.name=req.body.name
    // product.price=req.body.price
    // product.category=req.body.category
    // product.stock=req.body.stock

    // product.save()

    res.json({message:"Product updated successfully",product})

}

const deleteProduct = async (req,res)=>{
    const {id} = req.params
    const product = await Product.destroy({where:{id}})

    res.json({message:"Product deleted successfully",product})
}

export{
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}