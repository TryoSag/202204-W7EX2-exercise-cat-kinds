const { model, Schema } = require("mongoose");

const KindsSchema = new Schema({
  id: { type: Schema.Types.ObjectId, require: true },
  kinds: { type: String, require: true, unique: true },
});

const Kind = model("Kind", KindsSchema, "kinds");

module.exports = Kind;
