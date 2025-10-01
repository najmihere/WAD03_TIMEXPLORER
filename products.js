const express = require("express");
const router = express.Router();
const { users } = require("./users");

let products = [];

// Add product (only seller)
router.post("/", (req, res) => {
  const { product_name, product_category, price, owner } = req.body;

  const seller = users.find(u => u.username === owner && u.role === "seller");
  if (!seller) {
    return res.status(403).json({ message: "Only sellers can add products" });
  }
  if (products.find(p => p.product_name === product_name)) {
    return res.status(400).json({ message: "Product already exists" });
  }

  const product = { product_name, product_category, price, owner };
  products.push(product);
  res.status(201).json(product);
});

// List all products
router.get("/", (req, res) => {
  res.json(products);
});

// Get product details
router.get("/:product_name", (req, res) => {
  const product = products.find(p => p.product_name === req.params.product_name);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

module.exports = { router, products };