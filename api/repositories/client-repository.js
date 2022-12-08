// Definindo os 'imports'
const repBase = require('../bin/base/repository-base')
const firebase = require('../db')
const firestore = firebase.firestore()
const md5 = require('md5')

class clientRepository {
  constructor() {
    this._repBase = new repBase('client', 'clients')
  }

  async create(data) {
    return await this._repBase.create(data)
  }

  async update(id, data) {
    return await this._repBase.update(id, {
      id: data.id,
      fullName: data.fullName,
      email: data.email,
      birthDate: data.birthDate,
      genre: data.genre,
      city: data.city,
      state: data.state
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
  //   let client
  //   const res = await firestore
  //     .collection('clients')
  //     .where('email', '==', email)
  //     .where('password', '==', _hashPassword)
  //     .get()
  //     .then(snapshot => {
  //       snapshot.forEach(doc => {
  //         console.log(doc.id, ' => ', doc.data())
  //         client = doc.data()
  //       })
  //     })
  //   return client
  // }
}

module.exports = clientRepository
