const mongoose = require('../../libs/mongoose');
const Promise = require('bluebird');
const data = require('./data.json');

function createRecepts(){
  return Promise.each(data, (item) => {
    const saveItem = new mongoose.models.Recipe(item);
    return saveItem.save();
  });
}

function open(){
  return new Promise((resolve) => {
    mongoose.connection.on('open', resolve);
  });
}

function requireModels(){
  require('../../models/Recipe');
  return Promise.each(Object.keys(mongoose.models), (modelName) =>{
    return mongoose.models[modelName].ensureIndexes();
  });
}

function dropDb() {
  const db = mongoose.connection.db;
  return new Promise((resolve) => db.dropDatabase(resolve));
}

open()
  .then(dropDb)
  .then(requireModels)
  .then(createRecepts)
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err));