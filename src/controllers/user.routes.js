const express = require('express');
const router = express.Router();
const userService = require('../services/user.services');
const tenantMiddleware = require('../../middleware');

router.use(tenantMiddleware);

// Crear usuario
router.post('/', async (req, res) => {
  const userData = { ...req.body, tenantId: req.tenantId };
  const user = await userService.createUser(userData);
  res.status(201).json(user);
});

// Obtener usuarios del tenant
router.get('/', async (req, res) => {
  const users = await userService.getUsersByTenant(req.tenantId);
  res.json(users);
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body);
  res.json(updatedUser);
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'Usuario eliminado' });
});

module.exports = router;
