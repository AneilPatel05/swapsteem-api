// advertisements-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const advertisements = new Schema({
    adId: { type: Number, required: true, unique:true },
    adType: {type: String, required: true},
    adOwner: {type: String, required: true},
    adCoinAmount: {type: Number, required: true},
    adCoinBalance: {type: Number, required: true},
    adRate: {type: Number, required: true},
    currencyFrom: {type: String, required: true},
    currencyTo: {type: String, required: true},
    country: {type: String, required: true},
    tradeLimitFrom: {type: String, required: true},
    tradeLimitTo: {type: String, required: true},
    paymentMethods: {type: Array, required: true},
    adStatus: {type: String, required: true},
  }, {
    timestamps: true
  });

  return mongooseClient.model('advertisements', advertisements);
};
