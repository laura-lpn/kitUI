const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);
app.use(express.static('public'));

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
	console.log(`Serveur démarré sur http://${hostname}:${port}`);
});