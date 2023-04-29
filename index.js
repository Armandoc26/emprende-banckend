const http = require("http");
require('dotenv').config();

function requestController() {
    // logica de nuestra funcion
    console.log("hola mundo !!!!!");
}

//configurar nuestro servidor 
const server = http.createServer(requestController);

const PORT = process.env.PORT;

server.listen(PORT, function () {
    console.log('Aplicacion corriendo en puerto: ' + PORT);
})