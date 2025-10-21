// Simple in-memory storage:
// carts = [ { username: 'alice', items: [ {productId,productName,price,quantity}, ... ] }, ... ]

let carts = []; // initial empty
const cartRepository = {
  findAll() {
    return carts;
  },

  findByUsername(username) {
    return carts.find(c => c.username === username) || null;
  },

  createCart(username) {
    const newCart = { username, items: [] };
    carts.push(newCart);
    return newCart;
  },

  addItem(username, item) {
    let cart = carts.find(c => c.username === username);
    if (!cart) cart = this.createCart(username);

    // if product exists -> increase quantity
    const existing = cart.items.find(i => i.productId === item.productId);
    if (existing) {
      existing.quantity = existing.quantity + item.quantity;
    } else {
      cart.items.push({ 
        productId: item.productId, 
        productName: item.productName, 
        price: item.price, 
        quantity: item.quantity 
      });
    }
    return cart;
  },

  removeItem(username, productId, removeAll = false) {
    const cart = carts.find(c => c.username === username);
    if (!cart) return null;
    const idx = cart.items.findIndex(i => i.productId === productId);
    if (idx === -1) return null;

    if (removeAll || cart.items[idx].quantity <= 1) {
      // remove whole item
      cart.items.splice(idx, 1);
    } else {
      // decrease quantity by 1
      cart.items[idx].quantity = cart.items[idx].quantity - 1;
    }
    return cart;
  },

  clearCart(username) {
    const cart = carts.find(c => c.username === username);
    if (!cart) return null;
    cart.items = [];
    return cart;
  }
};

module.exports = cartRepository;