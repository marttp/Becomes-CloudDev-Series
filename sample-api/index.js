const express = require('express');
const app = express();
const uuidv4 = require('uuid').v4;

const PORT = 3020;

app.get('/', (req, res) => {
  res.send(`Hello. Your ID : ${uuidv4()}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
