// Initializes the `escrows` service on path `/escrows`
const createService = require('feathers-mongoose');
const createModel = require('../../models/escrows.model');
const hooks = require('./escrows.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/escrows', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('escrows');

  service.hooks(hooks);
};
