const express = require('express');
const app = express();
const port = 5000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening by me at http://localhost:${port}`);
});
