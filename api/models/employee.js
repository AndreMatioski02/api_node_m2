class Employee {
  constructor(
    id,
    fullName,
    email,
    birthDate,
    genre,
    expertise,
    city,
    state
  ) {
    this.id = id
    this.fullName = fullName
    this.email = email
    this.birthDate = birthDate
    this.genre = genre
    this.expertise = expertise
    this.city = city
    this.state = state
  }
}

module.exports = Employee