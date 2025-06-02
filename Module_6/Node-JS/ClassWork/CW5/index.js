const express = require('express');
const app = express();
const PORT = 3000;

// Sample jokes array with categories
const jokes = [
  { category: "science", text: "Why don’t scientists trust atoms? Because they make up everything!" },
  { category: "food", text: "What do you call fake spaghetti? An impasta!" },
  { category: "career", text: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
  { category: "spooky", text: "Why don’t skeletons fight each other? They don’t have the guts." },
  { category: "food", text: "What do you call cheese that isn't yours? Nacho cheese!" }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Random Jokes API!');
});

// Random joke route (optionally by category)
app.get('/api/jokes/random', (req, res) => {
  const { category } = req.query;

  if (category) {
    const filtered = jokes.filter(joke => joke.category.toLowerCase() === category.toLowerCase());

    if (filtered.length === 0) {
      return res.status(404).json({ error: `No jokes found for category: ${category}` });
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return res.json({ joke: filtered[randomIndex].text, category });
  }

  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex].text });
});

// All jokes route
app.get('/api/jokes/all', (req, res) => {
  res.json({ jokes });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
