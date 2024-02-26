import React, { useState } from 'react';
import './Products.css';
import ProductsInfo from './ProductsInfo';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Products = ({ data }) => {
  const productsList = data.map((product, i) => {
    return (
      <ProductsInfo
        key={product.produto_id}
        name={product.nome_produto}
        description={product.descricao_produto}
        price={product.preco_produto}
        createdAt={product.data_cadastro_produto}
        category={product.categoria_id}
        image={product.imagem}
      />
    );
  });

  const [key, setKey] = useState('produtos');
  return (

    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="produtos" title="Produtos">
        <div className="container d-flex">
          <div className="row">
            <div className="col">{productsList}</div>;
          </div>
        </div>

      </Tab>
      <Tab eventKey="adicionar" title="Adicionar Produtos">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Descrição do Produto</Form.Label>
            <Form.Control type="text" placeholder="Descrição" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Preço do Produto</Form.Label>
            <Form.Control type="text" placeholder="Preço" value="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quantidade em Estoque</Form.Label>
            <Form.Control type="text" placeholder="Quantidade" value="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Data de Cadastro</Form.Label>
            <Form.Control type="text" placeholder="dd/MM/aaaa" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Imagem</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button variant="primary" type="submit">
                  Submit
          </Button>
        </Form>
      </Tab>
      <Tab eventKey="editar" title="Editar Produtos">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ID do Produto</Form.Label>
            <Form.Control type="text" placeholder="ID" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Descrição do Produto</Form.Label>
            <Form.Control type="text" placeholder="Descrição" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Preço do Produto</Form.Label>
            <Form.Control type="text" placeholder="Preço" value="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quantidade em Estoque</Form.Label>
            <Form.Control type="text" placeholder="Quantidade" value="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Data de Cadastro</Form.Label>
            <Form.Control type="text" placeholder="dd/MM/aaaa" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Imagem</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button variant="primary" type="submit">
                  Salvar
          </Button>
        </Form>
      </Tab>
    </Tabs>
  );
};
export default Products;
