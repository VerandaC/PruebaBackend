const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  ci: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  role: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  tenantId: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
