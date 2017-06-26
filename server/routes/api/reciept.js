const Recept = require(`${__base}/models/Recipe`).Recipe;

exports.get = function(req, res, next) {
  const id = req.params.id;
  const findReciept = () => Recept.findOne().skip(+id);

  findReciept().then(reciept => res.json(reciept)).catch(next);
};
