const http = require("http");
require('dotenv').config();

function requestController(req, res) {
    // logica de nuestra funcion
    const url = req.url;
    const method = req.method;
    console.log({url, method});

    if (method === 'GET' && url === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        fs.readFile('./public/index.html', function(err, file) {
            if (err) {
                console.log('HUBO UN ERROR');
            }
            res.write(file);
            res.end();
        })
        return;
    }

    if (method === 'GET' && url === '/about') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        fs.readFile('./public/about.html', function(err, file) {
            if (err) {
                console.log('HUBO UN ERROR');
            }
            res.write(file);
            res.end();
        })
        return;
    } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write('<h1>Pagina no encontrada</h1>');
        res.end();
    }
}

//configurar nuestro servidor 
const server = http.createServer(requestController);

const PORT = process.env.PORT;

server.listen(PORT, function () {
    console.log('Aplicacion corriendo en puerto: ' + PORT);
})