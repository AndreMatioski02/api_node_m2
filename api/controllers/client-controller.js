const clientRepository = require('../repositories/client-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('../config')

const _repo = new clientRepository()

function clientController() {}

clientController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.fullName, 'Informe o  nome completo')
  _validator.isRequired(req.body.email, 'Informe o email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')
  _validator.isRequired(req.body.birthDate, 'Informe a data de nascimento')
  _validator.isRequired(req.body.genre, 'Informe o genero')
  _validator.isRequired(req.body.city, 'Informe a cidade')
  _validator.isRequired(req.body.state, 'Informe o estado')

  ctrlBase.post(_repo, _validator, req, res)
}

clientController.prototype.put = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.fullName, 'Informe o  nome completo')
  _validator.isRequired(req.body.email, 'Informe o email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')
  _validator.isRequired(req.body.birthDate, 'Informe a data de nascimento')
  _validator.isRequired(req.body.genre, 'Informe o genero')
  _validator.isRequired(req.body.city, 'Informe a cidade')
  _validator.isRequired(req.body.state, 'Informe o estado')

  ctrlBase.put(_repo, _validator, req, res)
}

clientController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res)
}

clientController.prototype.getById = async (req, res) => {
  ctrlBase.getById(_repo, req, res)
}

clientController.prototype.delete = async (req, res) => {
  ctrlBase.delete(_repo, req, res)
}

// clientController.prototype.authenticate = async (req, res) => {
//   let _validator = new validators()

//   _validator.isRequired(req.body.email, 'Informe o seu email')
//   _validator.isEmail(req.body.email, 'O email informado é inválido')
//   _validator.isRequired(req.body.password, 'Informe a sua senha')

//   if (!_validator.isValid()) {
//     res.status(400).send({
//       message: 'Não foi possível efetuar o Login!',
//       validation: _validator.errors()
//     })
//   }

//   let client = await _repo.authenticate(req.body.email, req.body.password)
//   if (client) {
//     res.status(200).send({
//       client: client,
//       token: jwt.sign(
//         {
//           user: client
//         },
//         config.secretKey
//       )
//     })
//   } else {
//     res.status(404).send({
//       message: 'Usuário e senha inválidos!'
//     })
//   }
// }

module.exports = clientController
