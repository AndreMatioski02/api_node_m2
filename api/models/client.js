class Client {
  constructor(
    id,
    fullName,
    email,
    birthDate,
    genre,
    city,
    state
  ) {
    this.id = id
    this.fullName = fullName
    this.email = email
    this.birthDate = birthDate
    this.genre = genre
    this.city = city
    this.state = state
  }
}

module.exports = Client