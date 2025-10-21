const cartService = require("../services/cartService");

exports.getCart = (req, res) => {
  const username = req.params.username;
  const cart = cartService.getCartByUsername(username);
  if (!cart) return res.status(404).json({ message: "Cart not found" });
  return res.json({ message: "Cart fetched successfully", cart });
};

exports.addToCart = (req, res) => {
  try {
    const username = req.params.username;
    const item = req.body; // { productId, productName, price, quantity }
    const updatedCart = cartService.addItemToCart(username, item);
    return res.status(201).json({ message: "Item added to cart", cart: updatedCart });
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message });
  }
};

exports.removeFromCart = (req, res) => {
  try {
    const username = req.params.username;
    const { productId, removeAll } = req.body; // removeAll boolean optional
    const updatedCart = cartService.removeItemFromCart(username, productId, !!removeAll);
    if (!updatedCart) return res.status(404).json({ message: "Item or cart not found" });
    return res.json({ message: "Item removed from cart", cart: updatedCart });
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message });
  }
};

exports.clearCart = (req, res) => {
  const username = req.params.username;
  const cleared = cartService.clearCart(username);
  if (!cleared) return res.status(404).json({ message: "Cart not found" });
  return res.json({ message: "Cart cleared" });
};