const connection = require('./connection');
const app = require('../app');

const getAddress = async () => {
    const [enderecos] = await connection.execute('SELECT * FROM endereco');
    return enderecos;
};

const addAddress = async (endereco) => {
    const { cep, rua, bairro, cidade, numero, complemento, uf } = endereco;
    const sql = `INSERT INTO endereco (cep, rua, bairro, cidade, numero, complemento, uf) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [createdAddress] = await connection.query(sql, [cep, rua, bairro, cidade, numero, complemento, uf] );

    return createdAddress;
};

const deleteAddress = async (endereco_id) => {
    const removeAddress = await connection.query('DELETE FROM endereco WHERE endereco_id = ?', [endereco_id]);

    return removeAddress;
};

const updateAddress = async (endereco_id, endereco) => {
    const { cep, rua, bairro, cidade, numero, complemento, uf } = endereco;

    const updatedAddress = await connection.query('UPDATE endereco SET cep = ?, rua = ?, bairro = ?, cidade = ?, numero = ?, complemento = ?, uf = ? WHERE  endereco_id = ?', [cep, rua, bairro, cidade, numero, complemento, uf, endereco_id ]);

    return updatedAddress;
};

module.exports = {
    getAddress,
    addAddress,
    deleteAddress,
    updateAddress,
};