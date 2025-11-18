// server.js
const express = require("express");
const path = require("path");
const app = express();

// Movie data (example set — edit as needed)
const movies = [
  { id: 1, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994, isClassic: true, director: "Frank Darabont" },
  { id: 2, title: "The Dark Knight", genre: "Action", releaseYear: 2008, isClassic: false, director: "Christopher Nolan" },
  { id: 3, title: "Pulp Fiction", genre: "Crime", releaseYear: 1994, isClassic: true, director: "Quentin Tarantino" },
  { id: 4, title: "Inception", genre: "Sci-Fi", releaseYear: 2010, isClassic: false, director: "Christopher Nolan" },
  { id: 5, title: "Parasite", genre: "Thriller", releaseYear: 2019, isClassic: false, director: "Bong Joon-ho" },
  { id: 6, title: "Casablanca", genre: "Romance", releaseYear: 1942, isClassic: true, director: "Michael Curtiz" }
];

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// GET /movies → all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// GET /movies/classics → classic movies
app.get("/movies/classics", (req, res) => {
  const classics = movies.filter(m => m.isClassic);
  res.json(classics);
});

// GET /movies/genres → genres with counts
app.get("/movies/genres", (req, res) => {
  const genreCounts = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});

  const genres = Object.entries(genreCounts).map(([name, count]) => ({
    name,
    movieCount: count
  }));

  res.json({ genres });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
