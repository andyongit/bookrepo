var heroin = require('heroin-js');
var _ = require("lodash");

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var prod = {
	name: 'andysbooks',
	domains: [ 'andysbooks.herokuapp.com' ]
};

var baseconfig = require('./base.js');
var prodconfig = _.merge({}, require('./base.js'), prod);
configurator(prod);
