const express = require('express');
const app = express();
const porth = 3030;
const path = require('path');

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));


app.listen(porth, () => console.log('Servidor ejecutando en el puerto ', porth));