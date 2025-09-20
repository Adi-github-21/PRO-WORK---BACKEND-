// middleware/isAdmin.js
export default function isAdmin(req, res, next) {
  const key = req.headers['x-admin-key'] || req.query.adminKey;
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ message: 'Unauthorized - admin key required' });
  }
  return next();
}
