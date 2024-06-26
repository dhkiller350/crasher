function json(url) {
  return fetch(url).then(res => res.json());
}

let apiKey = 'your_api_key';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  console.log(data.ip);
  console.log(data.city);
  console.log(data.country_code);
  // so many more properties
});


const http = require('http');

function requestListener(req, res) {
  let forwarded = req.headers['x-forwarded-for']
  let ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
  res.writeHead(200);
  res.end(ip);
}

const server = http.createServer(requestListener);
server.listen(3000);

console.log('Server listening at http://localhost:3000');
