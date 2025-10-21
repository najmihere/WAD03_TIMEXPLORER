const express = require('express');
const app = express();
const PORT = 3000;

// Middleware biar bisa baca JSON
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);
app.use('/carts', require('./routes/cart'));

// Root endpoint
app.get('/', (req, res) => {
  res.send('<h1>API E-Commerce - Users Management</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
