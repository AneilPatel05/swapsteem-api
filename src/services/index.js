const advertisements = require('./advertisements/advertisements.service.js');
const orders = require('./orders/orders.service.js');
const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(advertisements);
  app.configure(orders);
  app.configure(messages);
  app.configure(users);
};
