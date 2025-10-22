const { Sequelize } = require('sequelize');
const UserModel = require('./models/userModel');
const ProductModel = require('./models/productModel');
const CartModel = require('./models/cartModel');

const sequelize = new Sequelize('wad', 'postgres', 'postgres', {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = UserModel(sequelize);
db.Product = ProductModel(sequelize);
db.Cart = CartModel(sequelize);

module.exports = db;