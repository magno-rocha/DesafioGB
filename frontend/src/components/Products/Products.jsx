import React from 'react';
import './Products.css';
import ProductsInfo from './ProductsInfo';


const Products = ({ data }) => {
  const productsList = data.map((product, i) => {
    return (
      <ProductsInfo
        key={product.id}
        name={product.nome_produto}
        description={product.descricao_produto}
        price={product.preco}
        createdAt={product.data_cadastro_produto}
        category={product.category_id}
        image={product.imagem}
      />
    );
  });

  return (
    <div className="container text-center mymove">
      <div className="row">
        <div className="col-12">
          <div className="col char-name">{productsList}</div>;
        </div>
      </div>
    </div>
  );
};
export default Products;
