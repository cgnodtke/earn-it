var express = require('express');
var app = express.createServer(express.logger())
var pg = require('pg'),
  connectionString = process.env.DATABASE_URL,
  start = new Date(),
  port = process.env.PORT || 3000,
  client,
  query;

client = new pg.Client(connectionString);
client.connect();
//query = client.query('CREATE TABLE visits (date date)');
//query.on('end',function() {client.end();});

app.get('/', function(request, response) {
	var date = new Date();
	client.query('INSERT INTO visits(date) VALUES($1)', [date]);

  query = client.query('SELECT COUNT(date) AS count FROM visits WHERE date = $1', [date]);
  query.on('row', function(result) {
		console.log(result);
    if (!result) {
			return response.send('No data found');
		} else {
				response.send('Visits today: ' + result.count);
		}
	});
});

app.listen(port, function() {
		console.log('Listening on:', port);
});
