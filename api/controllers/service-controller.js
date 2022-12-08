const serviceRepository = require('../repositories/service-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('../config')

const _repo = new serviceRepository()

function serviceController() {}

serviceController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe o serviço')
  _validator.isRequired(req.body.description, 'Informe a descrição do serviço')
  _validator.isRequired(req.body.employeeName, 'Informe o empregado vinculado ao serviço')
  _validator.isRequired(req.body.clientName, 'Informe o cliente vinculado ao serviço')
  _validator.isRequired(req.body.animalName, 'Informe o animal vinculado ao serviço')

  ctrlBase.post(_repo, _validator, req, res)
}

serviceController.prototype.put = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe o serviço')
  _validator.isRequired(req.body.description, 'Informe a descrição do serviço')
  _validator.isRequired(req.body.employeeName, 'Informe o empregado vinculado ao serviço')
  _validator.isRequired(req.body.clientName, 'Informe o cliente vinculado ao serviço')
  _validator.isRequired(req.body.animalName, 'Informe o animal vinculado ao serviço')

  ctrlBase.put(_repo, _validator, req, res)
}

serviceController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res)
}

serviceController.prototype.getById = async (req, res) => {
  ctrlBase.getById(_repo, req, res)
}

serviceController.prototype.delete = async (req, res) => {
  ctrlBase.delete(_repo, req, res)
}

// serviceController.prototype.authenticate = async (req, res) => {
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

//   let service = await _repo.authenticate(req.body.email, req.body.password)
//   if (service) {
//     res.status(200).send({
//       service: service,
//       token: jwt.sign(
//         {
//           user: service
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

module.exports = serviceController
