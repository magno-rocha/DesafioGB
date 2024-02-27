const connection = require('./connection');

const getProduct = async () => {
  const [produtos] = await connection.execute('SELECT * FROM produto');
  return produtos;
};

const addProduct = async (produto) => {
  const { nome_produto, descricao_produto, preco_produto, qtd_estoque, categoria_id, imagem } = produto;
  const sql = 'INSERT INTO produto (nome_produto, descricao_produto, preco_produto, qtd_estoque, data_cadastro_produto, categoria_id, imagem) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const [createdProduct] = await connection.execute(sql, [nome_produto, descricao_produto, preco_produto, qtd_estoque, '2024/02/21', categoria_id, imagem] );

  return {insertId: createdProduct.insertId};
};

const deleteProduct = async (produto_id) => {
  const removeProduct = await connection.query('DELETE FROM produto WHERE produto_id = ?', [produto_id]);

  return removeProduct;
};

const updateProduct = async (produto_id, produto) => {
  const { nome_produto, descricao_produto, preco_produto, qtd_estoque, categoria_id, imagem } = produto;

  const updatedProduct = await connection.query('UPDATE produto SET nome_produto = ?, descricao_produto = ?, preco_produto = ?, qtd_estoque = ?, data_cadastro_produto = ?, categoria_id = ?, imagem = ? WHERE  produto_id = ?', [nome_produto, descricao_produto, preco_produto, qtd_estoque, '2024/02/21', categoria_id, imagem, produto_id ]);

  return updatedProduct;
};

module.exports = {
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};