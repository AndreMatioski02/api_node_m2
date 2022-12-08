// Definindo os 'imports'
const repBase = require('../bin/base/repository-base')
const firebase = require('../db')
const firestore = firebase.firestore()
const md5 = require('md5')

class userRepository {
  constructor() {
    this._repBase = new repBase('user', 'users')
  }

  async authenticate(email, password) {
    let _hashPassword = md5(password)
    let user
    await firestore
      .collection('users')
      .where('email', '==', email)
      .where('password', '==', _hashPassword)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, ' => ', doc.data())
          user = doc.data()
        })
      })
    return user
  }
}

module.exports = userRepository
