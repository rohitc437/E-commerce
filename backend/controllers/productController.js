const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErros = require('../middleware/catchAsyncErrors')


//create product by admin
exports.createProduct = catchAsyncErros( async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//get all Products
exports.getAllProducts =catchAsyncErros(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
}) 

//Get Single Product
exports.findSingleProduct =catchAsyncErros(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    // res.status(500).json({
    //   success:false,
    //   message:"Product Not Found"
    // })
    return next(new ErrorHandler("Product Not Found",404));
  }

  res.status(200).json({
    success: true,
    product,
  });
}) ;

//update product by admin
exports.updateProduct =catchAsyncErros(async (req, res, next) => {
  console.log(req.params.id);
  let product = await Product.findById(req.params.id);
  if (!product) {
    // res.status(500).json({
    //   success: false,
    //   message: "Product Not Found",
    // });
    return next("Product Not Found",404)
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
}) ;

//Delete Product
exports.deleteProduct =catchAsyncErros(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    // res.status(500).json({
    //   success: false,
    //   message: "Product Not Found",
    // });
    return next("Product Not Found",404)
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Delete Sucessfully",
  });
}) ;
