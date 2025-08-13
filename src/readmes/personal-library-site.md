# Library App
This project is a Node.js and Express web application for cataloging books and authors, similar to Goodreads. It allows users to manage a virtual library, add authors and books, and view stored information in an organized format. The backend uses MongoDB for data persistence and EJS for server-side rendering.

## Project Overview
The Library App Website provides a simple way to track books and authors while following an MVC-inspired structure.
- Express handles routing and server logic.
- MongoDB with Mongoose manages persistent data storage.
- EJS templates with express-ejs-layouts render dynamic HTML pages.
- Middleware like body-parser and method-override support form submissions and RESTful request methods.
This project serves as a foundation for building a more feature-rich personal cataloging system with planned improvements like user authentication and ratings.

## Features
- Add, edit, and delete authors
- Add, edit, and delete books
- Organized MVC-style routing structure
- EJS templates for server-side rendering
- MongoDB connection with Mongoose
- Environment configuration using .env
- Middleware support for form handling and method overriding

## Getting Started
### Prerequisites
- Node.js 16+
- npm
- MongoDB (local or cloud instance)
- Git

### Setup
1. Clone this repository:
   ```
   git clone https://github.com/mginham/Library_App_Website.git
   cd Library_App_Website
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a .env file in the project root:
   ```
   DATABASE_URL=mongodb://localhost:27017/library
   NODE_ENV=development
   ```
4. Start MongoDB locally or ensure your MongoDB Atlas connection string is correct in .env.
5. Run the development server:
   ```
   npm run devStart
   ```
6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure
```
Library_App_Website/
│
├── public/                # Static assets (CSS, images, client-side JS)
├── routes/                # Route controllers (index, authors, books)
├── views/                 # EJS templates
│   ├── layouts/           # Main layout file
│   ├── authors/           # Author-related views
│   ├── books/             # Book-related views
│   └── index.ejs
├── server.js              # Main application entry point
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Notes
- "Routes" in this project follow an MVC-like approach, functioning as controllers.
- method-override is required for PUT and DELETE operations in HTML forms.
- Ensure MongoDB is running before starting the server.

## Future Improvements
- Prevent duplicate authors or books from being added
- Add book ratings (stars and optional review text)
- Implement user authentication
- Add user profile management (create, edit, delete)

## License
This project is licensed under the ISC License.
