const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

const allRoutes = require('./routes');

app.use(express.json());
app.use(allRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
