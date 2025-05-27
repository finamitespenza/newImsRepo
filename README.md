# Inventory Management System

A complete inventory management solution built with the MERN stack (MongoDB, Express, React, Node.js). This system helps businesses track inventory, manage suppliers, process transactions, and generate reports.

## Features

- **User Authentication**: Secure login and registration with role-based access control
- **SKU Management**: Create, edit, view, and delete inventory items
- **Supplier Management**: Track supplier information and performance
- **Warehouse Management**: Manage multiple storage locations
- **Transaction Processing**: Record purchases, sales, and returns
- **Stock Adjustments**: Process inventory corrections with approval workflow
- **Vendor Mapping**: Associate SKUs with multiple vendors
- **Reporting**: Generate comprehensive reports for business analysis
- **Dashboard**: Visual overview of key inventory metrics

## Tech Stack

### Frontend
- React.js
- Material UI
- Framer Motion (animations)
- React Router (navigation)
- Formik & Yup (form handling and validation)
- Axios (API requests)
- React-Toastify (notifications)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JSON Web Tokens (authentication)
- bcrypt.js (password hashing)

## Installation & Setup Guide

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MongoDB Atlas account (or local MongoDB installation)

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd inventory-management-system
```

### Step 2: Set up environment variables
1. In the root directory, create a `.env` file based on `.env.example`:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Step 3: Install backend dependencies
```bash
npm install
```

### Step 4: Install frontend dependencies
```bash
cd frontend
npm install
cd ..
```

### Step 5: Start the development server
```bash
# Run both frontend and backend concurrently
npm run dev

# Or run them separately
# Backend only
npm run server

# Frontend only
npm run client
```

## Database Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Set up a database user with appropriate permissions
4. Get your connection string and add it to the `.env` file
5. The application will automatically create the required collections

## Usage

### User Roles
- **Admin**: Full access to all features
- **Manager**: Can manage inventory, approve adjustments, but cannot manage users
- **User**: Basic inventory operations

### Default Login
- Email: admin@example.com
- Password: password123

## API Endpoints

### Authentication
- `POST /api/users/login` - User login
- `POST /api/users/register` - User registration
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### SKU Management
- `GET /api/skus` - Get all SKUs
- `POST /api/skus` - Create a new SKU
- `GET /api/skus/:id` - Get SKU by ID
- `PUT /api/skus/:id` - Update SKU
- `DELETE /api/skus/:id` - Delete SKU

### Suppliers
- `GET /api/suppliers` - Get all suppliers
- `POST /api/suppliers` - Create a new supplier
- `GET /api/suppliers/:id` - Get supplier by ID
- `PUT /api/suppliers/:id` - Update supplier
- `DELETE /api/suppliers/:id` - Delete supplier

### Warehouses
- `GET /api/warehouses` - Get all warehouses
- `POST /api/warehouses` - Create a new warehouse
- `GET /api/warehouses/:id` - Get warehouse by ID
- `PUT /api/warehouses/:id` - Update warehouse
- `DELETE /api/warehouses/:id` - Delete warehouse

### Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create a new transaction
- `GET /api/transactions/:id` - Get transaction by ID
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Stock Adjustments
- `GET /api/stock-adjustments` - Get all stock adjustments
- `POST /api/stock-adjustments` - Create a new stock adjustment
- `GET /api/stock-adjustments/:id` - Get stock adjustment by ID
- `PUT /api/stock-adjustments/:id` - Update stock adjustment
- `DELETE /api/stock-adjustments/:id` - Delete stock adjustment

## License
This project is licensed under the MIT License - see the LICENSE file for details.