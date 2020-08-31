const router = require('express').Router()

const {
  getFruits,
  addFruit,
  deleteFruit,
  getfruitById,
  updateFruit
} = require('../controllers/fruits.controller')


router.get('/', getFruits)
router.get('/:id', getfruitById)
router.post('/', addFruit)
router.delete('/:id', deleteFruit)
router.put('/:id', updateFruit)

module.exports = router
