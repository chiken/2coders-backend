const router = require('express').Router()

const {
  getFruits,
  addFruit,
  deleteFruit
} = require('../controllers/fruits.controller')


router.get('/', getFruits)
router.post('/', addFruit)
router.delete('/:id', deleteFruit)

module.exports = router
