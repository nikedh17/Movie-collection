🎬 Movie Collection Display API
📌 About the Collection

This movie collection includes a mix of timeless classics and modern hits across multiple genres such as Drama, Action, Sci-Fi, and Thriller. The selection reflects iconic storytelling, memorable characters, and influential films that shaped cinema history.

📘 Project Description

The Movie Collection Display API is a Node.js + Express project that provides three API endpoints to view movies, classic films, and available genres with their counts.
It also includes a simple frontend (index.html) that fetches and displays movie data using JavaScript, along with basic styling.

Technologies Used:

Node.js

Express.js

HTML

CSS

JavaScript (Fetch API)

🎭 Genres Available

Drama

Action

Sci-Fi

Thriller


📂 Project Structure
movie-collection-api/
│── public/
│   └── index.html
│── server.js
│── package.json
│── package-lock.json
│── .gitignore
│── README.md

📡 API Documentation
1️⃣ GET /movies

Method: GET
Description: Returns all movies in the collection.
Sample Response:

[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]

2️⃣ GET /movies/classics

Method: GET
Description: Returns only the classic movies (released before 2000).
Sample Response:

[
  {
    "id": 3,
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "releaseYear": 1999,
    "isClassic": true,
    "director": "The Wachowskis"
  }
]

3️⃣ GET /movies/genres

Method: GET
Description: Returns a list of unique genres with movie counts.
Sample Response:

{
  "genres": [
    { "name": "Drama", "movieCount": 2 },
    { "name": "Sci-Fi", "movieCount": 2 }
  ]
}

🛠 Installation & Setup Instructions
1. Clone the repository
git clone https://github.com/nikedh17/Movie-collection.git

2. Navigate into the project
cd movie-collection-api

3. Install dependencies
npm install

4. Start the server
node server.js

5. Access the API

All Movies → http://localhost:3000/movies

Classic Movies → http://localhost:3000/movies/classics

Genres → http://localhost:3000/movies/genres

6. Access the Frontend
http://localhost:3000/

⭐ Features

✔ View all movies
✔ View classic movies only
✔ View genres with movie counts
✔ Simple and interactive frontend
✔ Classic movies are visually highlighted
✔ Organized API responses
✔ Clean project structure

🔗 GitHub Repository Link
https://github.com/nikedh17/Movie-collection.git

👉 Add your actual GitHub repo URL here

👤 Author

Nikedh