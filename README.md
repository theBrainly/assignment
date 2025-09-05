# Configuration Management System

A full-stack web application for managing and updating configuration data with a React frontend and Express/MongoDB backend.

## Project Overview

This project consists of a configuration management system that allows users to:
- Fetch configuration data by ID
- Update remarks associated with configurations
- View configuration data in a formatted table

## Tech Stack

### Backend
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Runtime**: Node.js
- **API**: RESTful API endpoints

### Frontend
- **Framework**: React 19
- **Routing**: React Router 7
- **HTTP Client**: Axios
- **Styling**: Inline CSS (with potential for Tailwind CSS integration)
- **Build Tool**: Vite

## Project Structure

```
backend/
├── controllers/
│   └── configurationsController.js  # API route handlers
├── db/
│   └── connect.js                   # Database connection setup
├── models/
│   └── user.model.js                # MongoDB schema
├── routes/
│   └── route.js                     # API routes
├── package.json
└── server.js                        # Main server file

frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── ui/                      # UI components (buttons, cards, etc.)
│   ├── lib/
│   │   └── utils.js/ts              # Utility functions
│   ├── pages/
│   │   ├── FetchConfigPage.jsx      # Page to fetch configurations
│   │   ├── HomePage.jsx             # Landing page
│   │   └── UpdateRemarkPage.jsx     # Page to update remarks
│   ├── App.jsx                      # Main component & routing
│   ├── index.css                    # Global styles
│   └── main.jsx                     # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## API Endpoints

| Method | Endpoint                   | Description                         |
|--------|----------------------------|-------------------------------------|
| GET    | /api/configurations/:id    | Get configuration data by ID        |
| PUT    | /api/configurations/:id    | Update remark for a configuration   |

## Data Model

### User Schema
```javascript
{
  configID: String,     // Unique configuration identifier
  data: [[String]],     // 2D array of string data
  remark: String,       // Remark or comment about the configuration
  timestamps: true      // Automatic createdAt and updatedAt fields
}
```

## Setup Instructions

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or Atlas connection)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=8080
   MONGODB_URI=mongodb://localhost:27017/config_db
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the application at: `http://localhost:5173`

## Features

1. **Home Page**: Navigation hub with links to main features
2. **Fetch Configuration**: 
   - Enter a configuration ID
   - View the configuration data in JSON format
   - View 2D array data in a formatted table
3. **Update Remark**:
   - Enter a configuration ID
   - Add or update a remark for the configuration
   - Receive success confirmation

## Development

### Running in Development Mode
- Backend: `npm run dev` (uses nodemon for auto-restarting)
- Frontend: `npm run dev` (uses Vite's hot module replacement)

### Building for Production
- Frontend: `npm run build`
- Backend: Use a process manager like PM2 in production

## License

ISC License - See the LICENSE file for details.
