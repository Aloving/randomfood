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
  complexity: { type: Number, required: true },
  ingredients: [Ingredient],
  instruction: [Instruction],
});

exports.Recipe = mongoose.model('Recipe', Recipe);
