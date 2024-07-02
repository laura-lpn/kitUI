const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use('/api', routes);

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
	console.log(`Serveur démarré sur http://${hostname}:${port}`);
});