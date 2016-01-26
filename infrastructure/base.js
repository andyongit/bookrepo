var base = {
  region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  config_vars: {MONGOLAB_URI: 'mongodb://heroku_hpq2q05h:vrmh0ode9afecvco3a36tk2bjq@ds047955.mongolab.com:47955/heroku_hpq2q05h' },
  collaborators: [ 'thomas.ermesjo@gmail.com', 'heroku@foynberge.com' ],
  features:
   { 'runtime-dyno-metadata': { enabled: false },
     'log-runtime-metrics': { enabled: false },
     'http-session-affinity': { enabled: false },
     preboot: { enabled: false },
     'http-shard-header': { enabled: false },
     'http-end-to-end-continue': { enabled: false }
   },
   formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
   log_drains: [],
};

module.exports = base;
