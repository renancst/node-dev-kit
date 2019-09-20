module.exports = {
  development: {
    username: "sa",
    password: "Meifacil123",
    database: "meifacildev",
    host: "127.0.0.1",
    dialect: "mssql",
    define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    },
  },
  test: {
    username: "sa",
    password: "Meifacil123",
    database: "meifaciltest",
    host: "127.0.0.1",
    dialect: "mssql",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mssql",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  }
}
