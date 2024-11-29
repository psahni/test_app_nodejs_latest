var http = require('http');
var fs = require('fs');
const { error } = require('console');

const PORT = 8001

http.createServer(function (req, res) {
  console.log(req.url); // /index.html
  fs.readFile('public/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(PORT, () => {
  console.log("Started server at ", PORT);
});

// https://websonic.co.uk/blog/local-http-server-with-node-js-routes-for-beginners