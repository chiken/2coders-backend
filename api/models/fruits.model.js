
const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    require: true
  },
  size: {
    type: String,
    enum: ['Pequeño', 'Mediano', 'Grande'],
    require: true
  },
  color: {
    type: String,
  }
})

const FruitModel = mongoose.model('Fruit', fruitSchema)

module.exports = FruitModel
