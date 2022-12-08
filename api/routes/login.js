const express = require('express')
const controller = require('../controllers/employee-controller')

const router = express.Router()

let _ctrl = new controller()

router.post('/login', _ctrl.authenticate)

module.exports = {
  routes: router
}