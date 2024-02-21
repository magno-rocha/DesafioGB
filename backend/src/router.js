const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');
const categoryController = require('./controllers/categoryController');
const clientController = require('./controllers/clientController');
const addressController = require('./controllers/addressController');
const orderController = require('./controllers/orderController');
const orderedProductController = require('./controllers/orderedProductController');



router.get('/produtos', productController.getProduct);
router.post('/produtos', productController.addProduct);
router.delete('/produtos/:id', productController.deleteProduct);
router.put('/produtos/:id', productController.updateProduct);

router.get('/categorias', categoryController.getCategory);
router.post('/categorias', categoryController.addCategory);
router.delete('/categorias/:id', categoryController.deleteCategory);
router.put('/categorias/:id', categoryController.updateCategory);

router.get('/clientes', clientController.getClient);
router.post('/clientes', clientController.addClient);
router.delete('/clientes/:id', clientController.deleteClient);
router.put('/clientes/:id', clientController.updateClient);

router.get('/enderecos', addressController.getAddress);
router.post('/categorias', addressController.addAddress);
router.delete('/categorias/:id', addressController.deleteAddress);
router.put('/categorias/:id', addressController.updateAddress);

router.get('/pedidos', orderController.getOrder);
router.post('/pedidos', orderController.addOrder);
router.delete('/pedidos/:id', orderController.deleteOrder);
router.put('/pedidos/:id', orderController.updateOrder);

router.get('/produtos_pedidos', orderedProductController.getOrderedProduct);
router.post('/produtos_pedidos', categoryController.addOrderedProduct);
router.delete('/produtos_pedidos/:id', categoryController.deleteOrderedProduct);
router.put('/produtos_pedidos/:id', categoryController.updateOrderedProduct);




module.exports = router;