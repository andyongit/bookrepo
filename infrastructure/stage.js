var heroin = require('heroin-js');
var _ = require("lodash");

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var stage = {
	name: 'andysbooks-stage',
	domains: [ 'andysbooks-stage.herokuapp.com' ],
	collaborators: [ 'thomas.ermesjo@gmail.com', 'heroku@foynberge.com' ],
};

var baseconfig = require('./base.js');
var stageconfig = _.merge({}, require('./base.js'), stage);
configurator(stage);
