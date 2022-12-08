// Definindo os 'imports'
const repBase = require('../bin/base/repository-base')
const firebase = require('../db')
const firestore = firebase.firestore()
const md5 = require('md5')

class serviceRepository {
  constructor() {
    this._repBase = new repBase('service', 'services')
  }

  async create(data) {
    return await this._repBase.create(data)
  }

  async update(id, data) {
    return await this._repBase.update(id, {
      name: data.name,
      description: data.description,
      employeeName: data.employeeName,
      clientName: data.clientName,
      animalName: data.animalName
    })
  }

  async getAll() {
    return await this._repBase.getAll()
  }

  async getById(id) {
    return await this._repBase.getById(id)
  }

  async delete(id) {
    return await this._repBase.delete(id)
  }

  // async authenticate(email, password) {
  //   let _hashPassword = md5(password)
  //   let service
  //   const res = await firestore
  //     .collection('services')
  //     .where('email', '==', email)
  //     .where('password', '==', _hashPassword)
  //     .get()
  //     .then(snapshot => {
  //       snapshot.forEach(doc => {
  //         console.log(doc.id, ' => ', doc.data())
  //         service = doc.data()
  //       })
  //     })
  //   return service
  // }
}

module.exports = serviceRepository
