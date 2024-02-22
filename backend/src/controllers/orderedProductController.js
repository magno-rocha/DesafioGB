const orderedProductModel = require("../models/orderedProductModel");
const app = require("../app");

const getOrderedProduct = async (req, res) => {
  const pedidos = await orderedProductModel.getOrderedProduct();
  return res.status(200).json(pedidos);
};

const addOrderedProduct = async (request, res) => {
  const createdOrderedProduct = await orderedProductModel.addOrderedProduct(
    request.body
  );
  return res.status(201).json(request.body);
};

const deleteOrderedProduct = async (request, res) => {
  const { id } = request.params;

  await orderedProductModel.deleteOrderedProduct(id);
  return res.status(204).json();
};

const updateOrderedProduct = async (request, res) => {
  const { id } = request.params;

  await orderedProductModel.updateOrderedProduct(id, request.body);
  return res.status(204).json();
};

module.exports = {
  getOrderedProduct,
  addOrderedProduct,
  deleteOrderedProduct,
  updateOrderedProduct,
};
