const express = require('express')
const controller = require('../controllers/animal-controller')
const auth = require('../middlewares/authentication')

const router = express.Router()

let _ctrl = new controller()

router.get('/',  _ctrl.get)
router.get('/:id',auth,  _ctrl.getById)
router.post('/', auth, _ctrl.post)
router.put('/:id', auth,_ctrl.put)
router.delete('/:id', auth, _ctrl.delete)

module.exports = {
  routes: router
}