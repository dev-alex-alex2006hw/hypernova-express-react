const hypernova = require('hypernova/server');
const path = require('path');
const { createGetComponent } = hypernova;
const SimpleComponent = require('./build/SimpleComponent.js');

const options = 
{
  // the limit at which body parser will throw
  bodyParser: {
    limit: 1024 * 1000,
  },
  // runs on a single process
  devMode: true,
  // how components will be retrieved,
  getComponent: createGetComponent({
    SimpleComponent: path.resolve(path.join('build', 'SimpleComponent.js'))
  }),
//  getComponent: require,
  // if not overridden, default will return the number of reported cpus  - 1
  // getCPUs: undefined,
  // the host the app will bind to
  host: '0.0.0.0',
  // configure the logger
  // logger: {},
  // the port the app will start on
  port: 3030,
  // default endpoint path
  endpoint: '/batch'
};

hypernova(options);
