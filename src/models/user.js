const Sequelize = require('sequelize')
// yarn sequelize model:create --name user --attributes first_name:string,last_name:string,email:string,password:string --underscored

class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return sequelize.define('user', {
      firstName: {
        field: 'first_name',
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        field: 'last_name',
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
    }, {
      underscored: true,
    })
  }

  checkPassword() {
    console.log(this)
  }
}

module.exports = User