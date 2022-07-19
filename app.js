const http = require('http')
function requestListener(request, response) {
    console.log(request.url, request.method, request.header);
    response.setHeader('Content-Type', 'text/html');
    response.write('Hello World');
    response.end();
}

const server = http.createServer(requestListener);
server.listen(3000)