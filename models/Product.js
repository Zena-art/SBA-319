import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    index: true // Indexed for frequent text searches
  },
  description: { 
    type: String, 
    required: true
    // Not indexed due to its length and infrequent use in queries
  },
  price: { 
    type: Number, 
    required: true,
    index: true // Indexed for sorting and range queries
  },
  category: { 
    type: String, 
    required: true,
    index: true // Indexed for frequent category-based queries
  },
  inStock: { 
    type: Number, 
    required: true, 
    default: 0,
    index: true // Indexed for availability filtering
  },
  createdAt: { 
    type: Date, 
    default: Date.now
    // Not indexed as it's likely to have a high write-to-read ratio
  },
  updatedAt: { 
    type: Date, 
    default: Date.now
    // Not indexed as it's frequently updated but rarely queried
  }
});

// Compound index for common query pattern: searching within a category and price range
productSchema.index({ category: 1, price: 1 });

// Compound index for searching by name within a category
productSchema.index({ name: 'text', category: 1 });

const Product = mongoose.model('Product', productSchema);

export default Product;
