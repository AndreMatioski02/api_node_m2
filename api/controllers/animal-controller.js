const animalRepository = require('../repositories/animal-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('../config')

const _repo = new animalRepository()

function animalController() {}

animalController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe o nome do animal')
  _validator.isRequired(req.body.birthDate, 'Informe a data de nascimento do animal')
  _validator.isRequired(req.body.genre, 'Informe o genero do animal')
  _validator.isRequired(req.body.breed, 'Informe a raça do animal')
  _validator.isRequired(req.body.clientName, 'Informe o cliente associado ao animal')

  ctrlBase.post(_repo, _validator, req, res)
}

animalController.prototype.put = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe o nome do animal')
  _validator.isRequired(req.body.birthDate, 'Informe a data de nascimento do animal')
  _validator.isRequired(req.body.genre, 'Informe o genero do animal')
  _validator.isRequired(req.body.breed, 'Informe a raça do animal')
  _validator.isRequired(req.body.clientName, 'Informe o cliente associado ao animal')

  ctrlBase.put(_repo, _validator, req, res)
}

animalController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res)
}

animalController.prototype.getById = async (req, res) => {
  ctrlBase.getById(_repo, req, res)
}

animalController.prototype.delete = async (req, res) => {
  ctrlBase.delete(_repo, req, res)
}

// animalController.prototype.authenticate = async (req, res) => {
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

//   let animal = await _repo.authenticate(req.body.email, req.body.password)
//   if (animal) {
//     res.status(200).send({
//       animal: animal,
//       token: jwt.sign(
//         {
//           user: animal
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

module.exports = animalController
