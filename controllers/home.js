var template = require('../views/index');

function start(res) {
  console.log("Request handler for main page was called.");
  res.writeHead(200, {"Content-Type": "text/html"});
  template.build(res);
}

exports.get = start;
