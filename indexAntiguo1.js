const http = require('node:http');

http.createServer((request, response) => {
    response.write('Hola, esta es mi primera respuesta desde un servidor');
    response.end();
}).listen(8080);

console.log('Escuchando por el puerto 8080');