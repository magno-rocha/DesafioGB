const categorysModel = require('../models/categoryModel');
const app = require('../app');


const getCategory = async (req, res) => {
    const categorias = await categorysModel.getAll();
    return res.status(200).json(categorias);
};

const addCategory = async (request, res) => {
    const createdcategory = await categorysModel.addCategory(request.body);
    return res.status(201).json(request.body);
}; 

const deleteCategory = async (request, res) => {
    const { id } = request.params;

    await categorysModel.deleteCategory(id);
    return res.status(204).json();
}

const updateCategory = async (request, res) => {
    const { id } = request.params;

    await categorysModel.updateCategory(id, request.body);
    return res.status(204).json();
}

module.exports = {
    getCategory,
    addCategory,
    deleteCategory,
    updateCategory,
};