const express = require('express');
const router = express.Router();
const orderService = require('../services/order.services');
const tenantMiddleware = require('../../middleware');

router.use(tenantMiddleware);

// Crear una orden
router.post('/', async (req, res) => {
  const data = {
    ...req.body,
    tenantId: req.tenantId
  };
  const order = await orderService.createOrder(data);
  res.status(201).json(order);
});

// Obtener órdenes por estado
router.get('/', async (req, res) => {
  const { status } = req.query;
  const limit = parseInt(req.query.limit) || 0;
  const orders = await orderService.getOrdersByStatus(req.tenantId, status, limit);
  res.json(orders);
});

// Obtener una orden por ID
router.get('/:id', async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  res.json(order);
});

// Cerrar una orden
router.put('/:id/close', async (req, res) => {
  const updatedOrder = await orderService.closeOrder(req.params.id);
  res.json(updatedOrder);
});

module.exports = router;
