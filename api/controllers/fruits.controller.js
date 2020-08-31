const FruitSchema = require('../models/fruits.model')

function getFruits (req, res) {
  FruitSchema.find()
    .then(response => {
      res.json(response)
    })
    .catch(err => console.log(err))
}

function addFruit (req, res) {
  const newFruit = req.body

  FruitSchema.create(newFruit)
    .then(response => {
      res.json(response)
    })
    .catch(err => console.log(err))
}

module.exports = {
  getFruits,
  addFruit
}
