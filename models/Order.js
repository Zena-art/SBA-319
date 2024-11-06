import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: [1, 'Quantity must be at least 1'] },
  price: { type: Number, required: true, min: [0, 'Price must be a positive number'] }
});

const orderSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true // Add index for frequent user queries
  },
  items: [orderItemSchema],
  totalAmount: { 
    type: Number, 
    required: true,
    min: [0, 'Total amount must be a positive number']
  },
  status: { 
    type: String, 
    required: true, 
    default: 'Pending', 
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    index: true // Add index for frequent status queries
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;