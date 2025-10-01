const express = require('express');
const app = express();
app.use(express.json()); // Untuk baca JSON dari request

// Integrasi carts.js
const { router: cartRoutes } = require('./carts');
app.use('/carts', cartRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});