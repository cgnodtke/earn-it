var fs = require('fs');

function build(res) {
  fs.readFile(__dirname + '/index.html', function(err, data) {
    if(err) {
      res.end(JSON.stringify(err));
    }
		else {
			console.log(data);
      res.write(data);
      res.end();
		}
	});
}

exports.build = build;
