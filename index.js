var server = require('./server');
var router = require('./router');
var home = require('./controllers/home');
//var signup = require('./controllers/signup');
//var login = require('./controllers/login');

var handle = {}
handle['/'] = home.get;
//handle['/signup'] = signup.get;
//handle['/login'] = login.get;

server.start(router.route, handle);
