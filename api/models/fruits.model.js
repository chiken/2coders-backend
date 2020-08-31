
const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    enum: ['Small', 'Mediun', 'Big'],
    require: true
  },
  color: {
    type: String,
  }
})

const FruitModel = mongoose.model('Fruit', fruitSchema)

module.exports = FruitModel
