const http = require('http'),
    fs = require('fs');

http.createServer((req, res)=> {

  const defaultMessage = '404 PAGE NOT FOUND!';

  switch (req.url) {
    case '/':
      fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(data);
        res.end();
      });
      break;
  
    case '/contact':
       fs.readFile('contact.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(data);
        res.end();
      });
      break;
    
    default:
      res.end(defaultMessage)
      break;
  }

}).listen(3030,'localhost')