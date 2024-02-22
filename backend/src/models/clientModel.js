const connection = require('./connection');
const app = require('../app');

const getClient = async () => {
    const [clientes] = await connection.execute('SELECT * FROM cliente');
    return clientes;
};

const addClient = async (cliente) => {
    const { email, username, senha, nome, cpf, telefone, data_nascimento, endereco_id } = cliente;
    const sql = `INSERT INTO cliente (email, username, senha, nome, cpf, telefone, data_nascimento, endereco_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const [createdClient] = await connection.query(sql, [email, username, senha, nome, cpf, telefone, '02/03/1990', endereco_id] );

    return createdClient;
};

const deleteClient = async (cliente_id) => {
    const removeClient = await connection.query('DELETE FROM cliente WHERE cliente_id = ?', [cliente_id]);

    return removeClient;
};

const updateClient = async (cliente_id, cliente) => {
    const { email, username, senha, nome, cpf, telefone, data_nascimento, endereco_id } = cliente;

    const updatedClient = await connection.query('UPDATE cliente SET email = ?, username = ?, senha = ?, nome = ?, cpf = ?, telefone = ?, data_nascimento = ?, endereco_id = ? WHERE  cliente_id = ?', [email, username, senha, nome, cpf, telefone, '28/03/1988', endereco_id, cliente_id ]);

    return updatedClient;
};

module.exports = {
    getClient,
    addClient,
    deleteClient,
    updateClient,
};