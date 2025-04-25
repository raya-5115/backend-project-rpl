Overview
This repository contains the backend code for a Role-Based Access Control (RBAC) system designed for a university application. The system supports three user roles: mahasiswa (student), dosen (lecturer), and mitra (partner).

Technologies Used
Node.js with Express.js framework
MongoDB for database storage
Mongoose for MongoDB object modeling
JWT for authentication
bcrypt for password hashing
dotenv for environment variables management

backend-project-rpl/
├── index.js                      # Entry point of the application
├── server/
│   ├── controller/               # Request handlers
│   │   ├── authController.js     # Authentication controller
│   │   └── userController.js     # User management controller
│   ├── middleware/               # Middleware functions
│   │   ├── authMiddleware.js     # JWT verification middleware
│   │   └── roleMiddleware.js     # Role-based access control middleware
│   ├── model/                    # Database models
│   │   └── userModel.js          # User schema and model
│   ├── routes/                   # API routes
│   │   ├── authRoute.js          # Authentication routes
│   │   └── userRoute.js          # User management routes
│   └── scripts/                  # Utility scripts
│       └── createInitialUsers.js # Script to create initial users
├── package.json                  # Project dependencies and scripts
└── .env                          # Environment variables (not in repo)

Setup and Installation
1.Clone the repository
2.Install dependencies
npm install
3.Run the application
# Development mode
npm run dev

# Production mode
npm start