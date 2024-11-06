# E-commerce API

## Introduction
This API provides endpoints for managing orders, users, and products in an e-commerce application.

## Getting Started
To get started with this API, you'll need to have Node.js and MongoDB installed on your machine. You can then clone this repository and run `npm install` to install the dependencies.

## Routes

### Users
| Method | Route               | Description                    |
| ------ | -------------------- | ------------------------------ |
| GET    | /api/users          | Retrieve a list of all users   |
| GET    | /api/users/{userId} | Retrieve a specific user by ID |
| POST   | /api/users          | Create a new user              |
| PUT    | /api/users/{userId} | Update a specific user         |
| DELETE | /api/users/{userId} | Delete a specific user         |

### Orders
| Method | Route                 | Description                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | /api/orders           | Retrieve a list of all orders    |
| GET    | /api/orders/{orderId} | Retrieve a specific order by ID  |
| POST   | /api/orders           | Create a new order               |
| PUT    | /api/orders/{orderId} | Update a specific order          |
| DELETE | /api/orders/{orderId} | Delete a specific order          |

### Products
| Method | Route                   | Description                       |
| ------ | ------------------------ | --------------------------------- |
| GET    | /api/products           | Retrieve a list of all products   |
| GET    | /api/products/{productId} | Retrieve a specific product by ID |
| POST   | /api/products           | Create a new product              |
| PUT    | /api/products/{productId} | Update a specific product         |
| DELETE | /api/products/{productId} | Delete a specific product         |

## Request/Response Bodies

- ### Users
 **Create**: 
 ```json
  { "name": "string", "email": "string", "password": "string" }
 ```

  **Update**:
  ```json
  {
  "name": "string",
  "email": "string"
}
 ```
- ### Orders
**Create**:
```json
{
  "user": "ObjectId",
  "items": [
    {
      "product": "ObjectId",
      "quantity": "number",
      "price": "number"
    }
  ],
  "totalAmount": "number",
  "status": "string"
}
```
**Update**
```json
{
  "status": "string",
  "shippingAddress": {
    "street": "string",
    "city": "string",
    "state": "string",
    "zipCode": "string",
    "country": "string"
  }
}
```

- ### Products
**Create**:
```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "category": "string",
  "inStock": "number"
}
```

**Update**
```json
{
  "name": "string",
  "description": "string",
  "price": "number"
}
```

# Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

# Acknowledgments

- MongoDB for providing a great NoSQL database solution
- Node.js for providing a great JavaScript runtime environment

