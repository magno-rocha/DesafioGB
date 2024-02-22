const addressModel = require('../models/addressModel');
const app = require('../app');


const getAddress = async (req, res) => {
    const clientes = await addressModel.getAddress();
    return res.status(200).json(clientes);
};

const addAddress = async (request, res) => {
    const createdAddress = await addressModel.addAddress(request.body);
    return res.status(201).json(request.body);
}; 

const deleteAddress = async (request, res) => {
    const { id } = request.params;

    await addressModel.deleteAddress(id);
    return res.status(204).json();
}

const updateAddress = async (request, res) => {
    const { id } = request.params;

    await addressModel.updateAddress(id, request.body);
    return res.status(204).json();
}

module.exports = {
    getAddress,
    addAddress,
    deleteAddress,
    updateAddress,
};