//var url = require('url');
var fs = require('fs');

function route(handle, pathname, response) {
  console.log('About to route a request for ' + pathname);
  if(/.(css)$/.test(pathname)) {
    response.writeHead(200, {'Content-Type': 'text/css'});
    fs.readFile(__dirname + pathname, 'utf8', function (err, res) {
			if(err) throw err;
			response.write(res, 'utf8');
			response.end();
		});
	}
  if(typeof handle[pathname] === 'function') {
    handle[pathname](response);
	}
  else {
		console.log('No request handler found for ' + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;
