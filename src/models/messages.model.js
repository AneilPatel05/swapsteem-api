// messages-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const messages = new Schema({
    orderId: { type: Number, required: true, unique:true },
    msgType: {type: String, required: true},
    msgFrom: {type: String, required: true},
    msgTo: {type: String, required: true},
    msgText: {type: String, required: true},
  }, {
    timestamps: true
  });

  return mongooseClient.model('messages', messages);
};
