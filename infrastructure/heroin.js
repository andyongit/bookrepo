var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

configurator.export('andysbooks').then(function(result) {
	console.log(result);
});

configurator({ name: 'andysbooks',
  region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  config_vars: {test:'heisann', MONGOLAB_URI: 'mongodb://heroku_hpq2q05h:vrmh0ode9afecvco3a36tk2bjq@ds047955.mongolab.com:47955/heroku_hpq2q05h' },
  addons: { mongolab: { plan: 'mongolab:sandbox' } },
  collaborators: [ 'thomas.ermesjo@gmail.com', 'heroku@foynberge.com' ],
  features:
   { 'runtime-dyno-metadata': { enabled: false },
     'log-runtime-metrics': { enabled: false },
     'http-session-affinity': { enabled: false },
     preboot: { enabled: false },
     'http-shard-header': { enabled: false },
     'http-end-to-end-continue': { enabled: false } },
  formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
  log_drains: [],
  domains: [ 'andysbooks.herokuapp.com' ] }
);

configurator({ name: 'andysbooks-stage',
  region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  config_vars: {test:'heisann', MONGOLAB_URI: 'mongodb://heroku_hpq2q05h:vrmh0ode9afecvco3a36tk2bjq@ds047955.mongolab.com:47955/heroku_hpq2q05h' },
  collaborators: [ 'thomas.ermesjo@gmail.com', 'heroku@foynberge.com' ],
  features:
   { 'runtime-dyno-metadata': { enabled: false },
     'log-runtime-metrics': { enabled: false },
     'http-session-affinity': { enabled: false },
     preboot: { enabled: false },
     'http-shard-header': { enabled: false },
     'http-end-to-end-continue': { enabled: false } },
  formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
  log_drains: [],
  domains: [ 'andysbooks-stage.herokuapp.com' ]
 }
);
