const mongoose = require(`../libs/mongoose`);
const Schema = mongoose.Schema;

const Ingredient = Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

const Instruction = Schema({
  image: String,
  step: {
    type: String,
    required: true,
  },
});

const Recipe = Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  likes: { type: Number, requred: true },
  dislikes: { type: Number, requred: true },
  time: { type: String, requred: true },
  ingredients: [Ingredient],
  instruction: [Instruction],
});

exports.Recipe = mongoose.model('Recipe', Recipe);
