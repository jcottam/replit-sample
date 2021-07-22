// const Database = require("@replit/database")
const express = require('express');

const app = express();

// const db = new Database()

app.get('/', (req, res) => {
  res.send('hi there')
});

app.listen(3000, () => {
  console.log('server started');
});