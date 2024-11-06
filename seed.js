import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Product from './models/Product.js';
import Order from './models/Order.js';

dotenv.config();

mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});

    // Create sample users
    const users = await User.create([
      { username: 'john_doe', email: 'john@example.com', password: 'password123', firstName: 'John', lastName: 'Doe' },
      { username: 'jane_smith', email: 'jane@example.com', password: 'password456', firstName: 'Jane', lastName: 'Smith' },
      { username: 'bob_johnson', email: 'bob@example.com', password: 'password789', firstName: 'Bob', lastName: 'Johnson' },
      { username: 'alice_williams', email: 'alice@example.com', password: 'passwordabc', firstName: 'Alice', lastName: 'Williams' },
      { username: 'charlie_brown', email: 'charlie@example.com', password: 'passworddef', firstName: 'Charlie', lastName: 'Brown' },
      { username: 'eva_davis', email: 'eva@example.com', password: 'passwordghi', firstName: 'Eva', lastName: 'Davis' },
      { username: 'frank_miller', email: 'frank@example.com', password: 'passwordjkl', firstName: 'Frank', lastName: 'Miller' },
      { username: 'grace_taylor', email: 'grace@example.com', password: 'passwordmno', firstName: 'Grace', lastName: 'Taylor' },
      { username: 'henry_wilson', email: 'henry@example.com', password: 'passwordpqr', firstName: 'Henry', lastName: 'Wilson' },
      { username: 'isabel_moore', email: 'isabel@example.com', password: 'passwordstu', firstName: 'Isabel', lastName: 'Moore' }
    ]);

    // Create sample products
    const products = await Product.create([
      { name: 'Laptop', description: 'High-performance laptop', price: 999.99, category: 'Electronics', inStock: 50 },
      { name: 'Smartphone', description: 'Latest model smartphone', price: 699.99, category: 'Electronics', inStock: 100 },
      { name: 'Headphones', description: 'Noise-cancelling headphones', price: 199.99, category: 'Electronics', inStock: 75 },
      { name: 'Running Shoes', description: 'Comfortable running shoes', price: 89.99, category: 'Sports', inStock: 200 },
      { name: 'Yoga Mat', description: 'Non-slip yoga mat', price: 29.99, category: 'Sports', inStock: 150 },
      { name: 'Coffee Maker', description: 'Programmable coffee maker', price: 79.99, category: 'Home', inStock: 60 },
      { name: 'Blender', description: 'High-speed blender', price: 59.99, category: 'Home', inStock: 80 },
      { name: 'Novel', description: 'Bestselling fiction novel', price: 14.99, category: 'Books', inStock: 300 },
      { name: 'Cookbook', description: 'Gourmet recipes cookbook', price: 24.99, category: 'Books', inStock: 100 },
      { name: 'Desk Chair', description: 'Ergonomic office chair', price: 149.99, category: 'Furniture', inStock: 40 }
    ]);

    // Create sample orders
    const orders = await Order.create([
      { user: users[0]._id, items: [{ product: products[0]._id, quantity: 1, price: products[0].price }], totalAmount: products[0].price, status: 'Pending' },
      { user: users[1]._id, items: [{ product: products[1]._id, quantity: 1, price: products[1].price }], totalAmount: products[1].price, status: 'Processing' },
      { user: users[2]._id, items: [{ product: products[2]._id, quantity: 2, price: products[2].price }], totalAmount: products[2].price * 2, status: 'Shipped' },
      { user: users[3]._id, items: [{ product: products[3]._id, quantity: 1, price: products[3].price }], totalAmount: products[3].price, status: 'Delivered' },
      { user: users[4]._id, items: [{ product: products[4]._id, quantity: 3, price: products[4].price }], totalAmount: products[4].price * 3, status: 'Pending' },
      { user: users[5]._id, items: [{ product: products[5]._id, quantity: 1, price: products[5].price }], totalAmount: products[5].price, status: 'Processing' },
      { user: users[6]._id, items: [{ product: products[6]._id, quantity: 2, price: products[6].price }], totalAmount: products[6].price * 2, status: 'Shipped' },
      { user: users[7]._id, items: [{ product: products[7]._id, quantity: 1, price: products[7].price }], totalAmount: products[7].price, status: 'Delivered' },
      { user: users[8]._id, items: [{ product: products[8]._id, quantity: 4, price: products[8].price }], totalAmount: products[8].price * 4, status: 'Pending' },
      { user: users[9]._id, items: [{ product: products[9]._id, quantity: 1, price: products[9].price }], totalAmount: products[9].price, status: 'Processing' }
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();