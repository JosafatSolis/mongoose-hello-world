const mongoose = require("mongoose");
const { Schema } = mongoose; // Igual que const Schema = mongoose.Schema;

//module.exports = mongoose.model("Cat", { name: String, age: Number });

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 1,
  },
});

module.exports = mongoose.model("Cat", catSchema);
