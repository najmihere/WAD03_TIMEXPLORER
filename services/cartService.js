const cartRepository = require("../repositories/cartRepository");

const cartService = {
  getCartByUsername(username) {
    return cartRepository.findByUsername(username);
  },

  addItemToCart(username, item) {
    // business validation
    const { productId, productName, price, quantity } = item || {};
    if (!productId || !productName || !price || !quantity) {
      const err = new Error("productId, productName, price and quantity are required");
      err.status = 400;
      throw err;
    }
    if (quantity <= 0) {
      const err = new Error("quantity must be greater than 0");
      err.status = 400;
      throw err;
    }
    // if cart doesn't exist, repository will create it
    return cartRepository.addItem(username, item);
  },

  removeItemFromCart(username, productId, removeAll = false) {
    return cartRepository.removeItem(username, productId, removeAll);
  },

  clearCart(username) {
    return cartRepository.clearCart(username);
  }
};

module.exports = cartService;