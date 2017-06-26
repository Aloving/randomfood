const randomNum = require(`${__base}/libs/randomNum`);
const Recept = require(`${__base}/models/Recipe`).Recipe;

exports.get = function(req, res, next) {
  const getCount = Recept.count();

  getCount.then(randomNum).then(num => res.json(num)).catch(next);
};
