# Click to TSS - Contact Management System

A modern web application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a contact form system with email notifications.

## Features

- Modern React frontend with Tailwind CSS
- RESTful API backend with Express.js
- MongoDB database integration
- Contact form with validation
- Email notification system
- Responsive design

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB (v4.4 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clicktotss
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Create environment variables:

Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/clicktotss
EMAIL_HOST=your-smtp-host
EMAIL_PORT=587
EMAIL_USER=your-email
EMAIL_PASS=your-email-password
EMAIL_FROM=your-sender-email
ADMIN_EMAIL=your-admin-email
```

## Running the Application

1. Start the backend server:
```bash
cd server
npm start
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## API Documentation

### Contact Form Endpoint

**POST /api/contact/submit**

Submit a new contact form entry.

Request body:
```json
{
  "name": "string (2-100 characters)",
  "email": "valid email address",
  "message": "string (10-1000 characters)"
}
```

Success Response (201):
```json
{
  "success": true,
  "data": {
    "name": "string",
    "email": "string",
    "message": "string",
    "timestamp": "date"
  }
}
```

Error Response (400):
```json
{
  "success": false,
  "errors": [
    {
      "param": "field_name",
      "msg": "error message"
    }
  ]
}
```

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
