const router = require('express').Router()

const fruitsRouter = require('./fruits.routes')

router.use('/fruits', fruitsRouter)

module.exports = router
