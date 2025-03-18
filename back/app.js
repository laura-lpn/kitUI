const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

app.use(cors({
  origin: 'http://kitui.lauralpn.fr'
}));
app.use(express.json());
app.use('/api', routes);

const hostname = 'backend.kitui.lauralpn.fr';
const port = 3000;

app.listen(port, hostname, () => {
	console.log(`Serveur démarré sur http://${hostname}:${port}`);
});