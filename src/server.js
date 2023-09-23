const http = require('http');
const { PORT: port = 3000 } = process.env;
const { platform, release } = require('os');
const versionOS = `${platform()} ${release()}`

console.log(`listening at http://localhost:${port}`);
//create a server object:
http.createServer(function (req, res) {
  res.write(`Hola fistro, te da cuen. Esta es la respuesta del server en el puerto ${port}`); //write a response to the client
  res.write(`\nOS: ${versionOS}`);
  res.write(`\nNode ver: ${process.versions.node}`);
  res.end(); //end the response
}).listen(Number(port));