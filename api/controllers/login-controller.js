const loginRepository = require('../repositories/login-repository')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const config = require('..//config')

const _repo = new loginRepository()

function loginController() {}

loginController.prototype.authenticate = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.email, 'Informe o seu email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')
  _validator.isRequired(req.body.password, 'Informe a sua senha')

  if (!_validator.isValid()) {
    res.status(400).send({
      message: 'Não foi possível efetuar o Login!',
      validation: _validator.errors()
    })
  }

  let user = await _repo.authenticate(req.body.email, req.body.password)
  if (user) {
    res.status(200).send({
      user: user,
      token: jwt.sign(
        {
          user: user
        },
        config.secretKey
      )
    })
  } else {
    res.status(404).send({
      message: 'Usuário e senha inválidos!'
    })
  }
}

module.exports = loginController
