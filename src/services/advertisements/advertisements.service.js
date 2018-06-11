// Initializes the `advertisements` service on path `/advertisements`
const createService = require('feathers-mongoose');
const createModel = require('../../models/advertisements.model');
const hooks = require('./advertisements.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/advertisements', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('advertisements');

  service.hooks(hooks);
};
