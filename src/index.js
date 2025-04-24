const express = require('express');
require('dotenv').config();
const cors = require('cors'); 

const app = express();
const port = 3000;

const allRoutes = require('./routes');


app.use(cors()); 

app.use(express.json());
app.use(allRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});