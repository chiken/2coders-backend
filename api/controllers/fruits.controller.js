const FruitSchema = require('../models/fruits.model')

function getFruits (req, res) {
  const filter = {}

  if(req.query.name){
    filter.name = { '$regex': req.query.name, '$options' : 'i' }
  }

  FruitSchema.find(filter)
    .then(response => {
      res.json(response)
    })
    .catch(err => console.log(err))
}

function addFruit (req, res) {
  FruitSchema.create(req.body)
    .then(response => {
      res.json(response)
    })
    .catch(err => console.log(err))
}

function deleteFruit (req, res) {
  const fruitId = req.params.id

  FruitSchema.findByIdAndDelete(fruitId)
    .then(response => {
      res.json(response)
    })
    .catch(err => console.log(err))
}

module.exports = {
  getFruits,
  addFruit,
  deleteFruit
}
