exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://hello:userPassword@ds139438.mlab.com:39438/knockknock';
exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'');
exports.PORT = process.env.PORT || 8080;