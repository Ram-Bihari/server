const http = require('http');

const host = 'localhost';
const port = 8080;


const requestListener = function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>My First Server!</h1></body></html>`);
   
}

const server = http.createServer(requestListener); 


server.listen(port, host, function() {
    console.log(`Server running at http://${host}:${port}`);
})

