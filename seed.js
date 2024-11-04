const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
    try {
        // Optional: Clear existing data
        await User.deleteMany({});
        await Product.deleteMany({});
        await Order.deleteMany({});

        // Insert sample users
        const users = await User.insertMany([
            { username: 'john_doe', email: 'john@example.com', passwordHash: 'hashed_password1' },
            { username: 'jane_doe', email: 'jane@example.com', passwordHash: 'hashed_password2' }
        ]);

        // Insert sample products
        const products = await Product.insertMany([
            { productName: 'Laptop', sku: '123-ABC', price: 1200, stockLevel: 10 },
            { productName: 'Mouse', sku: '456-DEF', price: 25, stockLevel: 200 }
        ]);

        // Insert sample orders
        const orders = await Order.insertMany([
            { productId: products[0]._id, quantity: 2, status: 'Completed' },
            { productId: products[1]._id, quantity: 5, status: 'Pending' }
        ]);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();
