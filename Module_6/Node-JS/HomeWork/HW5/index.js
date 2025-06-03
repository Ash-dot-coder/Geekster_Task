const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow API access from browser/postman

// Route to get a random image
app.get("/api/image/random", (req, res) => {
  const images = [
    "https://source.unsplash.com/random/800x600",
    "https://picsum.photos/800/600",
    "https://placekitten.com/800/600",
    "https://placebear.com/800/600",
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  res.json({ image: randomImage });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
