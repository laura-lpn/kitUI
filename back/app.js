const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

app.use(cors({
  origin: 'https://kitui.lauralpn.fr'
}));
app.use(express.json());
app.use('/api', routes);