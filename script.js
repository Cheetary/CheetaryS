const express = require('express');
const app = express();
const port = 3000;

// In-memory storage for users (you may want to use a database in a real application)
let users = [];

// Endpoint to add a user
app.post('/adduser', (req, res) => {
  const username = req.query.username;
  const profilePic = req.query.profilePic;
  
  if (username && profilePic) {
    users.push({ username, profilePic, subs: 0 });
    return res.send(`User ${username} added successfully!`);
  } else {
    return res.status(400).send('Missing username or profilePic');
  }
});

// Endpoint to get the top 50 users
app.get('/top50', (req, res) => {
  res.json(users.slice(0, 50));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
