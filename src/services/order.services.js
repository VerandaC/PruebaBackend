const Order = require('../models/order.model');

const createOrder = async (data) => {
  const calculatedTotal = data.items.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  const orderData = {
    ...data,
    total: calculatedTotal
  };

  return await Order.create(orderData);
};

const getOrdersByStatus = async (tenantId, status, limit = 0) => {
  return await Order.find({ tenantId, status })
    .sort({ createdAt: -1 })
    .limit(limit);
};

const getOrderById = async (id) => {
  return await Order.findById(id);
};

const closeOrder = async (id) => {
  return await Order.findByIdAndUpdate(id, { status: 'Cerrado' }, { new: true });
};

module.exports = { createOrder, getOrdersByStatus, getOrderById, closeOrder };
