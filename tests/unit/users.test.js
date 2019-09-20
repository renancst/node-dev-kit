const app = require('../../src/app')
const clearDatabase = require('../init/clearDatabase')

describe('#users', () => {
  const { User } = app.db.models

  beforeEach(() => {
    clearDatabase(app)
  })

  it('should create user', () => {
    const newUserData = {
      firstName: 'Renan',
      lastName: 'Costa',
      email: 'renan@email.com',
      password: '321',
    }

    return User.create(newUserData)
      .then(user => {
        expect(user.firstName).toBe(newUserData.firstName)
        expect(user.email).toBe(newUserData.email)
      })
  })

  it('should list all users', async () => {
    const newUsersData = [
      {
        firstName: 'Gustavo',
        lastName: 'Melo',
        password: '123',
        email: 'gustavo@email.com',
      },
      {
        firstName: 'Diogo',
        lastName: 'Cezar',
        password: 'ABC',
        email: 'diogo@email.com',
      },
    ]

    await Promise.all(newUsersData.map(newUserData => User.create(newUserData)))

    const [firstNewUser, secondNewUser] = newUsersData

    return User.findAll()
      .then(users => {
        expect(users.length).toBe(2)
        const [ firstUser, secondUser ] = users
        expect(firstUser.firstName).toBe(firstNewUser.firstName)
        expect(firstUser.lastName).toBe(firstNewUser.lastName)
        expect(secondUser.firstName).toBe(secondNewUser.firstName)
        expect(secondUser.lastName).toBe(secondNewUser.lastName)
      })
  })
})