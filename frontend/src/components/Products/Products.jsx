import React, { useState } from 'react';
import './Products.css';
import ProductsInfo from './ProductsInfo';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';

const Products = ({ data }) => {
  const productsList = data.map((product, i) => {
    return (
      <ProductsInfo
        key={product.produto_id}
        name={product.nome_produto}
        description={product.descricao_produto}
        price={product.preco_produto}
        quantity={product.qtd_estoque}
        createdAt={product.data_cadastro_produto}
        category={product.categoria_id}
        image={product.imagem}
      />
    );
  });
      
      
  const [key, setKey] = useState('produtos');
  /* const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [product_id, setId] = useState(''); */
  /* const [dados, setDados] = useState({
    nome_produto: '', 
    descricao_produto: '', 
    preco_produto: '', 
    qtd_estoque: '', 
    data_cadastro_produto: '', 
    categoria_id: '', 
    imagem: ''
  }); */

  /* const handleChange = (e) => {
    const value = e.target.value;
    setDados({
      ...dados,
      [e.target.name]: value
    });
  }; */

  /* const handleSubmit = (e) => {
    e.preventDefault();
    const dadosProduto = {
      nome_produto: dados.name, 
      descricao_produto: dados.description, 
      preco_produto: dados.price, 
      qtd_estoque: dados.quantity, 
      data_cadastro_produto: dados.date, 
      categoria_id: dados.category, 
      imagem: dados.image
    };
    axios.post('http://localhost:3333/produtos', dadosProduto).then((response) => {
      console.log(response.status, response.data.token);
    });
  }; */

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="produtos" title="Lista de Produtos">
          <div className="d-flex">
            <div className="cards-container">
              <div className="col">{productsList}</div>
            </div>
          </div>
        </Tab>
        {/*  <Tab eventKey="adicionar" title="Adicionar Produtos">
          <Form className="forms-container" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome do Produto</Form.Label>
              <Form.Control type="text" placeholder="Nome" value={dados.name}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Descrição do Produto</Form.Label>
              <Form.Control type="text" placeholder="Descrição" value={dados.description}
                onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Preço do Produto</Form.Label>
              <Form.Control type="text" placeholder="Preço" value={dados.price}
                onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantidade em Estoque</Form.Label>
              <Form.Control type="text" placeholder="Quantidade" value={dados.quantity}
                onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data de Cadastro</Form.Label>
              <Form.Control type="text" placeholder="dd/MM/aaaa" value={dados.date}
                onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID da Categoria</Form.Label>
              <Form.Control type="text" placeholder="ID da Categoria" value={dados.category}
                onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagem</Form.Label>
              <Form.Control type="file" value={dados.image}
                onChange={handleChange}/>
            </Form.Group>
            <Button className="card-btn"  type="submit">
                  Salvar
            </Button>
          </Form>
        </Tab> */}
      </Tabs>
    </>
  );
};
export default Products;
