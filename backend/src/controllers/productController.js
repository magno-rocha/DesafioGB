const productsModel = require('../models/productModel');
const app = require('../app');


const getProduct = async (req, res) => {
    const produtos = await productsModel.getProduct();
    return res.status(200).json(produtos);
};

const addProduct = async (request, res) => {
    const createdProduct = await productsModel.addProduct(request.body);
    return res.status(201).json(request.body);
}; 

const deleteProduct = async (request, res) => {
    const { id } = request.params;

    await productsModel.deleteProduct(id);
    return res.status(204).json();
}

const updateProduct = async (request, res) => {
    const { id } = request.params;

    await productsModel.updateProduct(id, request.body);
    return res.status(204).json();
}

module.exports = {
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct,
};