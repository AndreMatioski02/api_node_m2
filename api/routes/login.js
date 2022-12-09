const express = require('express')
const controller = require('../controllers/login-controller')

const router = express.Router()

let _ctrl = new controller()

router.post('/', _ctrl.authenticate)

module.exports = {
  routes: router
}