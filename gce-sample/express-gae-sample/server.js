const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

module.exports = app;
