const clientsModel = require('../models/clientModel');
const app = require('../app');


const getClient = async (req, res) => {
  const clientes = await clientsModel.getClient();
  return res.status(200).json(clientes);
};

const addClient = async (request, res) => {
  const createdClient = await clientsModel.addClient(request.body);
  return res.status(201).json(request.body);
}; 

const deleteClient = async (request, res) => {
  const { id } = request.params;

  await clientsModel.deleteClient(id);
  return res.status(204).json();
};

const updateClient = async (request, res) => {
  const { id } = request.params;

  await clientsModel.updateClient(id, request.body);
  return res.status(204).json();
};

module.exports = {
  getClient,
  addClient,
  deleteClient,
  updateClient,
};