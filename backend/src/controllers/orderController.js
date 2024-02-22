const orderModel = require('../models/orderModel');
const app = require('../app');


const getOrder = async (req, res) => {
    const pedidos = await orderModel.getOrder();
    return res.status(200).json(pedidos);
};

const addOrder = async (request, res) => {
    const createdOrder = await orderModel.addOrder(request.body);
    return res.status(201).json(request.body);
}; 

const deleteOrder = async (request, res) => {
    const { id } = request.params;

    await orderModel.deleteOrder(id);
    return res.status(204).json();
}

const updateOrder = async (request, res) => {
    const { id } = request.params;

    await orderModel.updateOrder(id, request.body);
    return res.status(204).json();
}

module.exports = {
    getOrder,
    addOrder,
    deleteOrder,
    updateOrder,
};