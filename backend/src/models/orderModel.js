const connection = require('./connection');
const app = require('../app');

const getOrder = async () => {
    const [pedidos] = await connection.execute('SELECT * FROM pedido');
    return pedidos;
};

const addOrder = async (pedido) => {
    const { numero_pedido, valor_total_pedido, data_pedido, status, cliente_id } = pedido;
    const sql = `INSERT INTO pedido (numero_pedido, valor_total_pedido, data_pedido, status, cliente_id) VALUES (?, ?, ?, ?, ?)`;
    const [createdOrder] = await connection.query(sql, [numero_pedido, valor_total_pedido, '21/02/2024', status, cliente_id] );

    return createdOrder;
};

const deleteOrder = async (pedido_id) => {
    const removeOrder = await connection.query('DELETE FROM pedido WHERE pedido_id = ?', [pedido_id]);

    return removeOrder;
};

const updateOrder = async (pedido_id, pedido) => {
    const { numero_pedido, valor_total_pedido, data_pedido, status, cliente_id } = pedido;

    const updatedOrder = await connection.query('UPDATE pedido SET numero_pedido = ?, valor_total_pedido = ?, data_pedido = ?, status = ?, cliente_id = ? WHERE pedido_id = ?', [numero_pedido, valor_total_pedido, '21/02/2024', status, cliente_id, pedido_id ]);

    return updatedOrder;
};

module.exports = {
    getOrder,
    addOrder,
    deleteOrder,
    updateOrder,
};