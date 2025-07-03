const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./src/controllers/user.routes');
const orderRoutes = require('./src/controllers/order.routes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funciona');
});

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
