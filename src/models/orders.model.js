// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    orderId: { type: Number, required: true, unique:true },
    orderType: {type: String, required: true},
    orderFrom: {type: String, required: true},
    orderTo: {type: String, required: true},
    orderCoinAmount: {type: Number, required: true},
    orderFiatAmount: {type: Number, required: true},
    currencyFrom: {type: String, required: true},
    currencyTo: {type: String, required: true},
    paymentMethods: {type: Array, required: true},
    orderEscrowId: {type: Number, required: true, unique:true},
    orderStatus: {type: String, required: true},

  }, {
    timestamps: true
  });

  return mongooseClient.model('orders', orders);
};
