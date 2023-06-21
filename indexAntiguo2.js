const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Esta es mi primera página');
});

app.get('/inicio', (request, response) => {
    response.send('Esta es mi página de inicio');
});

app.get('/bienvenidos', (request, response) => {
    response.send('Esta es mi página de bienvenida');
});

app.get('*', (request, response) => {
    response.send('404 | Recurso no encontrado');
});

app.listen(8080);