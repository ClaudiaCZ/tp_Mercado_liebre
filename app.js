const express = require('express');
const app = express();
const porth = 3030;
const path = require('path');
const user = require('./routes/user');
const index = require('./routes/index')


app.use(express.static('public'));
/*app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));*/

app.use('/user', user);
app.use('/', index);
app.listen(porth, () => console.log('Servidor ejecutando en el puerto ', porth));