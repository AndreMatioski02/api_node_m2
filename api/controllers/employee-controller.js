const employeeRepository = require('../repositories/employee-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('..//config')

const _repo = new employeeRepository()

function employeeController() {}

employeeController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.fullName, 'Informe o  nome completo')
  _validator.isRequired(req.body.email, 'Informe o email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')
  _validator.isRequired(req.body.birthDate, 'Informe a data de nascimento')
  _validator.isRequired(req.body.genre, 'Informe o genero')
  _validator.isRequired(req.body.expertise, 'Informe a especialidade')
  _validator.isRequired(req.body.city, 'Informe a cidade')
  _validator.isRequired(req.body.state, 'Informe o estado')

  ctrlBase.post(_repo, _validator, req, res)
}

employeeController.prototype.put = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.fullName, 'Informe o  nome completo')
  _validator.isRequired(req.body.email, 'Informe o email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')
  _validator.isRequired(req.body.birthDate, 'Informe a data de nascimento')
  _validator.isRequired(req.body.genre, 'Informe o genero')
  _validator.isRequired(req.body.expertise, 'Informe a especialidade')
  _validator.isRequired(req.body.city, 'Informe a cidade')
  _validator.isRequired(req.body.state, 'Informe o estado')

  ctrlBase.put(_repo, _validator, req, res)
}

employeeController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res)
}

employeeController.prototype.getById = async (req, res) => {
  ctrlBase.getById(_repo, req, res)
}

employeeController.prototype.delete = async (req, res) => {
  ctrlBase.delete(_repo, req, res)
}

// employeeController.prototype.authenticate = async (req, res) => {
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

//   let employee = await _repo.authenticate(req.body.email, req.body.password)
//   if (employee) {
//     res.status(200).send({
//       employee: employee,
//       token: jwt.sign(
//         {
//           user: employee
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

module.exports = employeeController
