const clientsModel = require('../models/clientModel');
const app = require('../app');


const getClient = async (req, res) => {
    const clientes = await ClientsModel.getClient();
    return res.status(200).json(clientes);
};

const addClient = async (request, res) => {
    const createdClient = await ClientsModel.addClient(request.body);
    return res.status(201).json(request.body);
}; 

const deleteClient = async (request, res) => {
    const { id } = request.params;

    await ClientsModel.deleteClient(id);
    return res.status(204).json();
}

const updateClient = async (request, res) => {
    const { id } = request.params;

    await ClientsModel.updateClient(id, request.body);
    return res.status(204).json();
}

module.exports = {
    getClient,
    addClient,
    deleteClient,
    updateClient,
};