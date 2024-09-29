SeamlessCo. is a software solution company where clients can connect with developers, designers, marketers, testers, writers, and more to work on their products. This repository contains the code for the Seamless Co. application, which integrates authentication, authorization, and a user-friendly interface for managing various features. The API is fully documented using Swagger for easy exploration and testing of the endpoints.

#Table of Contents

    Overview
    Features
    Installation
    Usage
    Configuration
    Contributing
    License
    Contact

#Overview

Seamlessco. provides a platform to manage user registrations, logins, and profile management. The application is built with:

    Frontend: React, Next.js
    Backend: NestJS (documented with Swagger)
    Styling: TailwindCSS
    Database: MongoDB (via Mongoose)

#Features

    User Authentication: Registration, login, and logout functionalities.
    Profile Management: View and update user profiles.
    Responsive Design: Works across different devices and screen sizes.
    Error Handling: Provides user-friendly error messages and status updates.
    API Documentation: Explore and test API endpoints via Swagger.

Installation
Prerequisites

    Node.js (v18.x or later)
    MongoDB (locally or a cloud instance)
    npm (or yarn)

#Steps
Clone the Repository
git clone https://github.com/okonpatrick/seamlessco.git
cd seamlessco

Install Backend Dependencies

Navigate to the backend directory and install dependencies:
cd nestproject
npm install

Install Frontend Dependencies

Navigate to the frontend directory and install dependencies:

cd ../seamlessco
npm install


#Environment Variables

Create a .env file in both the frontend and backend directories and configure the necessary environment variables.

Example:
Backend (src/nestproject/.env)

PORT=3000
JWT_SECRET=your_jwt_secret
MONGO_URI=mongodb://localhost:27017/seamlessco

Frontend (src/seamlessco/.env)

NEXT_PUBLIC_API_URL=http://localhost:3000

Start the Application

Start the backend server:

cd src/nestproject
npm run start


Start the frontend server:

cd ../seamlessco
npm run dev

The application should now be running at http://localhost:3000

Usage
#Frontend

    Sign Up: Users can register by providing their details (firstname, lastname, email, date of birth, gender, and password).
    Login: Users can log in using their email and password.
    Profile: Access and update user profiles after logging in.

#Backend

    Endpoints: The backend exposes several REST endpoints for user management, including /auth/register, /auth/login, and /auth/profile.
    API Documentation: Access the Swagger documentation at http://localhost:3000/api-docs to explore and test the API endpoints.
    Database: User data is managed and stored in MongoDB.
    The API is hosted and the URL is: https://seamlessco-backend.onrender.com

#Configuration

    Frontend: Update next.config.js if you need to modify any build or runtime settings.
    Backend: Modify main.ts and other configuration files for specific backend settings.

#Frontend Integration

The frontend is built with React and Next.js, utilizing TailwindCSS for styling. The application uses the AuthContext to manage authentication state and provide login, registration, and logout functionality.
Components

    UserProviders: Wraps the application in the AuthProvider for context management.
    SignUp: Component for user registration.
    Login: Component for user login.
    Profile: Component for displaying user profile information.

#Contributing

We welcome contributions to Seamless Co. If you would like to contribute, please follow these guidelines:

    Fork the Repository
    Create a Branch: git checkout -b feature/your-feature
    Commit Your Changes: git commit -am 'Add new feature'
    Push to the Branch: git push origin feature/your-feature
    Create a Pull Request

#License

Seamless Co. is not licensed yet. Stay tuned for the next big thing!