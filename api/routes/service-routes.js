const express = require('express')
const controller = require('../controllers/service-controller')
const auth = require('../middlewares/authentication')

const router = express.Router()

let _ctrl = new controller()

// router.post('/login', _ctrl.authenticate)
router.get('/', _ctrl.get)
router.get('/:id', _ctrl.getById)
router.post('/', _ctrl.post)
router.put('/:id', _ctrl.put)
router.delete('/:id', _ctrl.delete)

module.exports = {
  routes: router
}