const connection = require('./connection');
const app = require('../app');

const getCategory = async () => {
    const [categorias] = await connection.execute('SELECT * FROM categoria');
    return categorias;
};

const addCategory = async (categoria) => {
    const { nome_categoria, descricao_categoria} = categoria;
    const sql = `INSERT INTO categoria (nome_categoria, descricao_categoria) VALUES (?, ?)`;
    const [createdCategory] = await connection.query(sql, [nome_categoria, descricao_categoria] );

    return createdCategory;
};

const deleteCategory = async (categoria_id) => {
    const removeCategory = await connection.query('DELETE FROM categoria WHERE categoria_id = ?', [categoria_id]);

    return removeCategory;
};

const updateCategory = async (categoria_id, categoria) => {
    const { nome_categoria, descricao_categoria} = categoria;

    const updatedCategory = await connection.query('UPDATE categoria SET nome_categoria = ?, descricao_categoria = ?, WHERE  categoria_id = ?', [nome_categoria, descricao_categoria, categoria_id]);

    return updatedCategory;
};

module.exports = {
    getCategory,
    addCategory,
    deleteCategory,
    updateCategory,
};