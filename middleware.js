module.exports = (req, res, next) => {
  const tenantId = req.headers['x-tenant-id'];
  if (!tenantId) {
    return res.status(400).json({ message: 'Tenant ID missing' });
  }
  req.tenantId = tenantId;
  next();
};
