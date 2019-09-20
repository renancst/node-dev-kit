const Sequelize = require('sequelize')
const env = 'test'
const config = require('./config/database')[env]

const User = require('./models/user')

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

const models = {
  User: User.init(sequelize, Sequelize),
}

module.exports = { Sequelize, sequelize, models }
