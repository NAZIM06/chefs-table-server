const express = require('express');
const port = 5000;
const cors = require("cors");

const app = express();
app.use(cors());

const recipes = require('./Data/data.json')
const traditionalFood = require('./Data/dishes.json')

app.get('/', (req, res) =>{
  res.send(recipes)
})

app.get('/recipe/:id', (req, res) =>{
  const id = req.params.id;
  const singleRecipe = recipes.find(rs => rs.id == id)
  res.send(singleRecipe)
})

app.get('/traditionalFood', (req, res) =>{
  res.send(traditionalFood);
})

// Start the server
app.listen(port, () => {
  console.log(`Server listening by me at http://localhost:${port}`);
});
