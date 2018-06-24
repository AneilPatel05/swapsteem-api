// escrows-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const escrows = new Schema({
    orderId: { type: Number, required: true, unique:true },
    escrowId: { type: Number, required: true, unique:true },
    escrowFrom: {type: Date, required: true},
    escrowTo: {type: String, required: true},
    escrowAgent: {type: String, required: true},
    escrowCoinAmount: {type: Number, required: true},
    escrowFiatAmount: {type: Number, required: true},
    escrowFeeAmount: {type: Number, required: true},
    escrowStatus: {type: String, required: true},
    escrowRatificationDeadline: {type: Date, required: true},
    escrowExpirationDeadline: {type: Date, required: true},

  }, {
    timestamps: true
  });

  return mongooseClient.model('escrows', escrows);
};
