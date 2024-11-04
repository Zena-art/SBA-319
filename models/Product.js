const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    stockLevel: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);
