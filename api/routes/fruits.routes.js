const router = require('express').Router()

const {
  getFruits,
  addFruit
} = require('../controllers/fruits.controller')


router.get('/', getFruits)
router.post('/', addFruit)

module.exports = router
