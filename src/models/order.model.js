const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  clientName: {
    type: String,
    required: true
  },
  items: [
    {
      productName: String,
      price: Number,
      quantity: Number
    }
  ],
  status: {
    type: String,
    enum: ['En Curso', 'Cerrado'],
    default: 'En Curso'
  },
  startTime: {
    type: Date,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tenantId: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
