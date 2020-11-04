const http = require('http');
const { PORT: port = 3000 } = process.env;

console.log(`listening at http://localhost:${port}`);
//create a server object:
http.createServer(function (req, res) {
  res.write(`Hola fistro, te da cuen. Ésta es la respuesta del server en el puerto ${port}`); //write a response to the client
  res.end(); //end the response
}).listen(Number(port));