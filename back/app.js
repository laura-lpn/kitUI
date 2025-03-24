const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

app.use(cors({
  origin: 'http://kitui.lauralpn.fr'
}));
app.use(express.json());
app.use('/api', routes);

const port = 3000;

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});