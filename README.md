⚠️ Project Status: Under Active Development

This project is currently under active development.
Some features may be incomplete, experimental, or subject to change.
Bugs or unexpected behavior may occur as new updates are being implemented.
The codebase may change frequently as improvements and new features are added.
Use this project for learning and testing purposes at this stage.

🎬 Movie Trailer API
A RESTful API built with Node.js, Express, and MongoDB that allows users to fetch, add, update, and manage movie trailers.
This project was created to practice backend development, API design, and real-world Node.js concepts.

🚀 Features
🎥 Add new movies with trailer links

📄 Fetch all movies or a single movie

✏️ Update movie details

❌ Delete movies

🔍 Search movies by title

🛡️ Proper error handling with middleware

🌱 Environment variable support using .env


🛠️ Tech Stack

Node.js – JavaScript runtime

Express.js – Web framework

MongoDB – NoSQL database

Mongoose – MongoDB ODM

dotenv – Environment variable management

Postman – API testing


movie-trailer-api/

│
├── src/

│   ├── controllers/

│   │   └── movie.controller.js

│   ├── models/

│   │   └── Movie.js

│   ├── routes/

│   │   └── movie.routes.js

│   ├── middlewares/

│   │   └── errorHandler.js

│   └── app.js
│
├── server.js

├── .env

├── .gitignore

├── package.json

└── README.md


📦 Installation & Setup


1️⃣ Clone the repository

Copy code

Bash

git clone https://github.com/your-username/movie-trailer-api.git

cd movie-trailer-api


2️⃣ Install dependencies


Copy code
Bash

npm install


3️⃣ Configure environment variables

Create a .env file in the root directory:

Copy code

Env

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/movieTrailerDB

⚠️ .env is ignored using .gitignore for security reasons.


4️⃣ Run the server

Copy code

Bash

npm run dev

Server will start at:

Copy code

http://localhost:5000

📡 API Endpoints

🎬 Movies

Method

Endpoint

Description

GET

/api/movies

Get all movies

GET

/api/movies/:id

Get a single movie

POST

/api/movies

Add a new movie

PATCH

/api/movies/:id

Update movie

DELETE

/api/movies/:id

Delete movie


🧾 Sample Movie Schema

Copy code
Js

{

  title: String,
  
  description: String,
  
  trailerUrl: String,
  
  releaseYear: Number,
  
  createdAt: Date
  
}


❗ Error Handling

Centralized error-handling middleware is used to return consistent error responses:

Copy code

Json

{

  "status": "error",
  
  "message": "Movie not found"
  
}


🎯 Learning Outcomes

Through this project, I learned:

How Node.js handles async operations

Structuring a scalable Express project

REST API best practices

MongoDB schema design

Middleware & error handling

Environment-based configuration

🔮 Future Improvements

🔐 User authentication (JWT)

⭐ Movie ratings & reviews

🎭 Genre-based filtering

🧪 Unit & integration tests

🚀 Deployment (Render / Railway)

🤝 Contributing

Contributions are welcome!

Feel free to fork this repo and submit a pull request.

📄 License

This project is licensed under the MIT License.

Copyright (c) 2026 Thejas Krishnan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
