const connection = require("./connection");
const app = require("../app");

const getOrderedProduct = async () => {
  const [produtos_pedidos] = await connection.execute(
    "SELECT * FROM produto_pedido"
  );
  return produtos_pedidos;
};

const addOrderedProduct = async (produto_pedido) => {
  const { qtd_produto_pedido, preco_produto_pedido, produto_id, pedido_id } =
    produto_pedido;
  const sql = `INSERT INTO produto_pedido (qtd_produto_pedido, preco_produto_pedido, produto_id, pedido_id) VALUES (?, ?, ?, ?)`;
  const [createdOrderedProduct] = await connection.query(sql, [
    qtd_produto_pedido,
    preco_produto_pedido,
    produto_id,
    pedido_id,
  ]);

  return createdOrderedProduct;
};

const deleteOrderedProduct = async (produto_pedido_id) => {
  const removeOrderedProduct = await connection.query(
    "DELETE FROM produto_pedido WHERE produto_pedido_id = ?",
    [produto_pedido_id]
  );

  return removeOrderedProduct;
};

const updateOrderedProduct = async (produto_pedido_id, produto_pedido) => {
  const { qtd_produto_pedido, preco_produto_pedido, produto_id, pedido_id } =
    produto_pedido;

  const updatedOrderedProduct = await connection.query(
    "UPDATE produto_pedido SET qtd_produto_pedido = ?, preco_produto_pedido = ?, produto_id = ?, pedido_id = ? WHERE produto_pedido_id = ?",
    [
      qtd_produto_pedido,
      preco_produto_pedido,
      produto_id,
      pedido_id,
      produto_pedido_id,
    ]
  );

  return updatedOrderedProduct;
};

module.exports = {
  getOrderedProduct,
  addOrderedProduct,
  deleteOrderedProduct,
  updateOrderedProduct,
};
