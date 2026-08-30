const http = require('http');
function handler(req, res) {
  const u = new URL(req.url, 'http://localhost');
  const result = eval(u.searchParams.get('expr'));
  res.end('result ' + result);
}
http.createServer(handler);
module.exports = { handler };