
const express = require('express');
const router = express.Router();
const { users } = require('./users'); // Import dari users.js (sementara dummy kalau belum ada)
const { products } = require('./products'); // Import dari products.js

let carts = {}; // Cart per user: { username: [{ product_name, qty }] }

// POST /carts/:username/add - Tambah produk ke cart (hanya buyer)
router.post('/:username/add', (req, res) => {
  const { username } = req.params;
  const { product_name, qty } = req.body;

  // Cek kalau user adalah buyer
  const buyer = users.find(u => u.username === username && u.role === 'buyer');
  if (!buyer) {
    return res.status(403).json({ message: 'Only buyers can use cart' });
  }

  // Cek kalau produk ada
  const product = products.find(p => p.product_name === product_name);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Tambah ke cart
  if (!carts[username]) carts[username] = [];
  let item = carts[username].find(i => i.product_name === product_name);
  if (item) {
    item.qty += qty || 1; // Default qty 1 kalau nggak dikasih
  } else {
    carts[username].push({ product_name, qty: qty || 1 });
  }
  res.json(carts[username]);
});

// POST /carts/:username/remove - Hapus produk dari cart
router.post('/:username/remove', (req, res) => {
  const { username } = req.params;
  const { product_name } = req.body;

  if (!carts[username]) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  carts[username] = carts[username].filter(i => i.product_name !== product_name);
  res.json(carts[username]);
});

// GET /carts/:username - Lihat isi cart
router.get('/:username', (req, res) => {
  res.json(carts[req.params.username] || []);
});

module.exports = { router, carts };