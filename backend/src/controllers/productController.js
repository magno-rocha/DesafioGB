const productModel = require('../models/productModel');

const getProduct = async (req, res) => {
  const produtos = await productModel.getProduct();
  return res.status(200).json(produtos);
};

const addProduct = async (req, res) => {
  const createdProduct = await productModel.addProduct(req.body);
  return res.status(201).json(createdProduct);
}; 

const deleteProduct = async (request, res) => {
  const { id } = request.params;

  await productModel.deleteProduct(id);
  return res.status(204).json();
};

const updateProduct = async (request, res) => {
  const { id } = request.params;

  await productModel.updateProduct(id, request.body);
  return res.status(204).json();
};

module.exports = {
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};