const express = require('express');
const app = express();

app.use(express.static('public'));

/* app.get('/', (request, response) => {
    response.send('Esta es mi primera página');
});

app.get('/inicio', (request, response) => {
    response.send('Esta es mi página de inicio');
}); */

/* app.get('/bienvenidos', (request, response) => {
    response.send('Esta es mi página de bienvenida');
}); */

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/404.html');
});

app.listen(8080);